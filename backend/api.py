from fastapi import FastAPI
from routes  import player

from fastapi.middleware.cors import CORSMiddleware


client_app = [
  "http://localhost:3000"
]
app = FastAPI()

app.include_router(player.router)

app.add_middleware(
  CORSMiddleware,
  allow_methods=["*"],
  allow_headers=["*"],
  allow_credentials=True,
  allow_origins=client_app
)


@app.get("/")
async def root():
  return {"message": "Hello World!"}