\c ratings_db

DROP TABLE IF EXISTS ratings;
CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR,
  comment TEXT
);

