from fastapi import APIRouter
from app.config import settings
from app.api.v1 import leads_router, health_router

api_router = APIRouter(prefix=settings.API_V1_PREFIX)

api_router.include_router(health_router)
api_router.include_router(leads_router)