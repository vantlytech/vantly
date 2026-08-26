from sqlalchemy import Column, Integer, String, DateTime, Text, Enum as SQLEnum
from sqlalchemy.sql import func
import enum
from app.database import Base


class LeadStatus(str, enum.Enum):
    NEW = "new"
    CONTACTED = "contacted"
    QUALIFIED = "qualified"
    CLOSED = "closed"


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    company = Column(String(255), nullable=True)
    phone = Column(String(50), nullable=True)
    service_interest = Column(String(100), nullable=True)  # GEO, SEO, Web Dev, etc.
    message = Column(Text, nullable=True)
    status = Column(SQLEnum(LeadStatus), default=LeadStatus.NEW, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    def __repr__(self):
        return f"<Lead(id={self.id}, name='{self.name}', email='{self.email}', status='{self.status}')>"