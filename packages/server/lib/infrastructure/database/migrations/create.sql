--
-- ENUMS
CREATE TYPE game_state as ENUM ('PLAYING', 'NEW_GAME');
CREATE TYPE player_state as ENUM ('ONLINE', 'OFFLINE');

--
-- TABLES
CREATE TABLE IF NOT EXISTS games (
  "gameId" SERIAL,
	"name" TEXT UNIQUE NOT NULL,
	"state" game_state NOT NULL,
	"createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("gameId")
);

CREATE TABLE IF NOT EXISTS players (
	"playerId" SERIAL,
  "gameId" INT NOT NULL,
  "name" TEXT NOT NULL,
  "mission" TEXT,
  "key" TEXT NOT NULL,
  "avatar" TEXT NOT NULL,
	"state" player_state NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("gameId", "name"),
  CONSTRAINT fk_game
      FOREIGN KEY("gameId") 
	      REFERENCES games("gameId")
        ON DELETE CASCADE
);

--
-- TRIGGERS
CREATE OR REPLACE FUNCTION fn_update_timestamp()
RETURNS trigger AS '
BEGIN
  NEW."updatedAt" = NOW();
  RETURN NEW;
END;' 
LANGUAGE plpgsql;

CREATE TRIGGER trigger_games_set_timestamp
BEFORE UPDATE ON games
FOR EACH ROW
EXECUTE PROCEDURE fn_update_timestamp();

CREATE TRIGGER trigger_players_set_timestamp
BEFORE UPDATE ON players
FOR EACH ROW
EXECUTE PROCEDURE fn_update_timestamp();
