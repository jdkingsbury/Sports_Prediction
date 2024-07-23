from nba_api.stats.endpoints import commonplayerinfo
from nba_api.stats.static import players

# from app.db.database import SessionLocal


# NOTE: Plan to use async
def fetch_player_info(player_id):
    player_info = commonplayerinfo.CommonPlayerInfo(player_id=player_id)

    player_info_df = player_info.get_data_frames()[0]
    # player_info_df = player_info_df.rename(columns={"PERSON_ID": "PLAYER_ID"})
    player_info_df["IMAGE_URL"] = player_info_df["PLAYER_ID"].apply(
        lambda x: f"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/{x}.png"
    )

    player_info_df = player_info_df[
        [
            "PERSON_ID",
            "DISPLAY_FIRST_LAST",
            "FIRST_NAME",
            "LAST_NAME",
            "BIRTHDATE",
            "SCHOOL",
            "COUNTRY",
            "HEIGHT",
            "WEIGHT",
            "JERSEY",
            "POSITION",
            "ROSTERSTATUS",
            "TEAM_ID",
            "FROM_YEAR",
            "TO_YEAR",
            "DRAFT_YEAR",
            "DRAFT_ROUND",
            "DRAFT_NUMBER",
            "IMAGE_URL",
        ]
    ]

    return player_info_df


def get_all_player_ids():
    all_players = players.get_players()
    active_players = [player for player in all_players if player["is_active"] == True]
    player_ids = [player["id"] for player in active_players]
    return player_ids
