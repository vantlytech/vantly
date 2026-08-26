from typing import Annotated
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.core.security import verify_admin_api_key

DbSession = Annotated[AsyncSession, Depends(get_db)]
AdminAuth = Annotated[str, Depends(verify_admin_api_key)]