INSERT INTO games (
  name,
  state
)
VALUES
  (
    'diyafulu',
    'NEW_GAME'
  ),
  (
    'ruwettiri',
    'PLAYING'
  ),
  (
    'moducoxo',
    'NEW_GAME'
  );

INSERT INTO players (
  "gameId",
  name,
  avatar,
  state,
  key
)
VALUES
  (
    1,
    'posip',
    '2465426',
    'ONLINE',
    'a12345'
  ),
  (
    1,
    'miwif',
    '2465428',
    'OFFLINE',
    'b45678'
  ),
  (
    2,
    'koxig',
    '2465432',
    'ONLINE',
    'c23456'
  ),
  (
    3,
    'quoceh',
    '2465436',
    'ONLINE',
    'd34567'
  );
