from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config.db import engine, Base
from app.routes.auth_routes import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Auth API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)


@app.get("/")
def home():
    return {"message": "FastAPI Backend Running"}