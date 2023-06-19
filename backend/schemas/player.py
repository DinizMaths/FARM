def playerEntity(db_item) -> dict:
  return {
    "id": str(db_item["_id"]),
    "name": db_item["name"],
    "team": db_item["team"]
  }

def listPlayerEntity(db_item_list) -> list:
  player_list = []

  for item in db_item_list:
    player_list.append(playerEntity(item))

  return player_list