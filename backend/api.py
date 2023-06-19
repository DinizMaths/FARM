from fastapi import FastAPI
from routes  import player

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(player.router)

app.add_middleware(
  CORSMiddleware,
  allow_methods=["*"],
  allow_headers=["*"],
  allow_credentials=True,
  allow_origins=["http://localhost:3000"]
)


@app.get("/")
async def root():
  return {"message": "Hello World!"}