import logging
from app.config import settings
from app.schemas.lead import LeadResponse

logger = logging.getLogger(__name__)


async def send_lead_notification(lead: LeadResponse) -> None:
    """
    Send email notification for new lead.
    Currently logs to console; replace with actual email sending in production.
    """
    log_message = (
        f"\n{'='*60}\n"
        f"NEW LEAD NOTIFICATION\n"
        f"{'='*60}\n"
        f"Name: {lead.name}\n"
        f"Email: {lead.email}\n"
        f"Company: {lead.company or 'N/A'}\n"
        f"Phone: {lead.phone or 'N/A'}\n"
        f"Service Interest: {lead.service_interest or 'N/A'}\n"
        f"Message: {lead.message or 'N/A'}\n"
        f"Created At: {lead.created_at}\n"
        f"{'='*60}\n"
    )
    
    logger.info(log_message)
    
    # TODO: Implement actual email sending when SMTP is configured
    # if settings.SMTP_HOST:
    #     await _send_email(lead)


async def _send_email(lead: LeadResponse) -> None:
    """Send actual email via SMTP (to be implemented)."""
    # Implementation would use aiosmtplib or similar
    pass