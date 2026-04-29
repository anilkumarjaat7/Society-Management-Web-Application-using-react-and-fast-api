from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models.user_model import User
from app.schemas.user_schema import UserCreate, UserLogin
from app.core.security import hash_password, verify_password


def create_user(user: UserCreate, db: Session):
    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already already exists")

    new_user = User(
        name=user.name,
        email=user.email,
        phone=user.phone,
        house_number=user.house_number,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created successfully"}


def login_user(user: UserLogin, db: Session):
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    if not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid password")

    return {
        "message": "Login successful",
        "user": {
            "name": db_user.name,
            "email": db_user.email
        }
    }