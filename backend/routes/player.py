from fastapi         import APIRouter
from config.database import conn
from models.player   import Player
from schemas.player  import playerEntity, listPlayerEntity
from bson            import ObjectId

router = APIRouter(
  prefix="/players",
  tags=["Players"]
)


@router.get("/")
async def get_all_players():
  return listPlayerEntity(conn.farm.players.find({}))

@router.get("/{player_id}")
async def get_player(player_id):
  return playerEntity(
    conn.farm.players.find_one(
      {
        "_id": ObjectId(player_id)
      }
    )
  )

@router.post("")
async def post_players(player: Player):
  conn.farm.players.insert_one(dict(player))

  return listPlayerEntity(conn.farm.players.find({}))

@router.put("/{player_id}")
async def put_players(player_id, player: Player):
  conn.farm.players.find_one_and_update(
    {
      "_id": ObjectId(player_id)
    },
    {
      "$set": dict(player)
    }
  )

  return playerEntity(conn.farm.players.find_one({"_id": ObjectId(player_id)}))

@router.delete("/{player_id}")
async def delete_players(player_id):
  return playerEntity(
    conn.farm.players.find_one_and_delete(
      {
        "_id": ObjectId(player_id)
      }
    )
  )