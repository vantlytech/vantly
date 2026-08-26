from fastapi import Header, HTTPException, status
from app.config import settings


async def verify_admin_api_key(x_admin_api_key: str = Header(..., alias="X-Admin-API-Key")) -> str:
    if x_admin_api_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admin API key",
        )
    return x_admin_api_key