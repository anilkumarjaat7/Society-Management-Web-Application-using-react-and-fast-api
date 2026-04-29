from fastapi import FastAPI
from app.config.db import engine, Base
from app.routes.auth_routes import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Auth API")

app.include_router(auth_router)


@app.get("/")
def home():
    return {"message": "FastAPI Backend Running"}