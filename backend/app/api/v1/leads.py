from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional
from app.api.deps import DbSession, AdminAuth
from app.schemas.lead import LeadCreate, LeadUpdate, LeadResponse, LeadListResponse
from app.services.lead_service import create_lead, get_lead, get_leads, update_lead
from app.models.lead import LeadStatus

router = APIRouter(prefix="/leads", tags=["leads"])


@router.post("", response_model=LeadResponse, status_code=status.HTTP_201_CREATED)
async def create_lead_endpoint(
    lead_data: LeadCreate,
    db: DbSession,
) -> LeadResponse:
    return await create_lead(db, lead_data)


@router.get("", response_model=LeadListResponse)
async def list_leads(
    db: DbSession,
    admin_auth: AdminAuth,
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    status: Optional[LeadStatus] = None,
    search: Optional[str] = None,
) -> LeadListResponse:
    return await get_leads(db, page, page_size, status, search)


@router.get("/{lead_id}", response_model=LeadResponse)
async def get_lead_endpoint(
    lead_id: int,
    db: DbSession,
    admin_auth: AdminAuth,
) -> LeadResponse:
    lead = await get_lead(db, lead_id)
    if not lead:
        from app.core.exceptions import LeadNotFoundError
        raise LeadNotFoundError(lead_id)
    return lead


@router.patch("/{lead_id}", response_model=LeadResponse)
async def update_lead_endpoint(
    lead_id: int,
    lead_update: LeadUpdate,
    db: DbSession,
    admin_auth: AdminAuth,
) -> LeadResponse:
    lead = await update_lead(db, lead_id, lead_update)
    if not lead:
        from app.core.exceptions import LeadNotFoundError
        raise LeadNotFoundError(lead_id)
    return lead