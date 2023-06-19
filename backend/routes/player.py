from fastapi         import APIRouter
from config.database import conn
from models.player   import Player

router = APIRouter(
  prefix="/player",
  tags=["Player"]
)

@router.get("/")
async def get_all_players():
  pass