from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.config.db import SessionLocal
from app.schemas.user_schema import UserCreate, UserLogin
from app.services.auth_service import create_user, login_user

router = APIRouter(prefix="/auth", tags=["Auth"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(user, db)


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    return login_user(user, db)