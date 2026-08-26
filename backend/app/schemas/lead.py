from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from app.models.lead import LeadStatus


class LeadBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=255)
    phone: Optional[str] = Field(None, max_length=50)
    service_interest: Optional[str] = Field(None, max_length=100)
    message: Optional[str] = None


class LeadCreate(LeadBase):
    pass


class LeadUpdate(BaseModel):
    status: Optional[LeadStatus] = None


class LeadResponse(LeadBase):
    id: int
    status: LeadStatus
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class LeadListResponse(BaseModel):
    leads: list[LeadResponse]
    total: int
    page: int
    page_size: int
    total_pages: int