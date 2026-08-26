from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload
from typing import Optional
from app.models.lead import Lead, LeadStatus
from app.schemas.lead import LeadCreate, LeadUpdate, LeadResponse, LeadListResponse
from app.services.email import send_lead_notification


async def create_lead(db: AsyncSession, lead_data: LeadCreate) -> LeadResponse:
    lead = Lead(**lead_data.model_dump())
    db.add(lead)
    await db.commit()
    await db.refresh(lead)
    
    lead_response = LeadResponse.model_validate(lead)
    await send_lead_notification(lead_response)
    
    return lead_response


async def get_lead(db: AsyncSession, lead_id: int) -> Optional[LeadResponse]:
    result = await db.execute(select(Lead).where(Lead.id == lead_id))
    lead = result.scalar_one_or_none()
    if lead:
        return LeadResponse.model_validate(lead)
    return None


async def get_leads(
    db: AsyncSession,
    page: int = 1,
    page_size: int = 20,
    status: Optional[LeadStatus] = None,
    search: Optional[str] = None,
) -> LeadListResponse:
    query = select(Lead)
    
    if status:
        query = query.where(Lead.status == status)
    
    if search:
        search_term = f"%{search}%"
        query = query.where(
            (Lead.name.ilike(search_term)) |
            (Lead.email.ilike(search_term)) |
            (Lead.company.ilike(search_term))
        )
    
    # Get total count
    count_query = select(func.count()).select_from(query.subquery())
    total_result = await db.execute(count_query)
    total = total_result.scalar_one()
    
    # Apply pagination
    query = query.order_by(Lead.created_at.desc())
    query = query.offset((page - 1) * page_size).limit(page_size)
    
    result = await db.execute(query)
    leads = result.scalars().all()
    
    lead_responses = [LeadResponse.model_validate(lead) for lead in leads]
    
    total_pages = (total + page_size - 1) // page_size
    
    return LeadListResponse(
        leads=lead_responses,
        total=total,
        page=page,
        page_size=page_size,
        total_pages=total_pages,
    )


async def update_lead(db: AsyncSession, lead_id: int, lead_update: LeadUpdate) -> Optional[LeadResponse]:
    result = await db.execute(select(Lead).where(Lead.id == lead_id))
    lead = result.scalar_one_or_none()
    if not lead:
        return None
    
    update_data = lead_update.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(lead, field, value)
    
    await db.commit()
    await db.refresh(lead)
    
    return LeadResponse.model_validate(lead)