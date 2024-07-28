export type Player = {
  player_id: number;
  first_last: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  school: string;
  country: string;
  height: string;
  weight: string;
  jersey: string;
  position: string;
  is_active: boolean;
  from_year: number;
  to_year: number;
  team_id: number;
  draft_year: string;
  draft_round: string;
  draft_number: string;
  image_url: string;
};

export type CareerStats = {
  PERSON_ID: number;
  SEASON_ID: string;
  LEAGUE_ID: string;
  TEAM_ID: number;
  TEAM_ABBREVIATION: string;
  PLAYER_AGE: number;
  GP: number;
  GS: number;
  MIN: number;
  FGM: number;
  FGA: number;
  FG_PCT: number;
  FG3M: number;
  FG3A: number;
  FG3_PCT: number;
  FTM: number;
  FTA: number;
  FT_PCT: number;
  OREB: number;
  DREB: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  TOV: number;
  PF: number;
  PTS: number;
};

export type PlayerGameLog = {
  id: number;
  season_id: string;
  player_id: number;
  game_id: string;
  game_date: Date;
  matchup: string;
  wl: string;
  min: number;
  fgm: number;
  fga: number;
  fg_pct: number;
  fg3m: number;
  fg3a: number;
  fg3_pct: number;
  ftm: number;
  fta: number;
  ft_pct: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  pts: number;
  plus_minus: number;
  video_available: boolean;
  season_year: string;
};
