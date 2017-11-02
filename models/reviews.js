
const db = require('../db/config');

const Review = {};

Review.findAll = () => {
  return db.manyOrNone('SELECT * FROM ratings');
};

Review.findById = (id) => {
  return db.one(`
  SELECT * FROM ratings
  WHERE id = $1
 `, [id]);
};

Review.create = (review, userId) => {
  return db.one(`
  INSERT INTO ratings
  (name, review, stars)
  VALUES ($1, $2, $3)
  RETURNING *
 `, [ratings.name, ratings.location, ratings.comment])
};

Review.update = (name, id) => {
  return db.one(`
  UPDATE ratings SET
  name = $1,
  location = $2,
  comment = $3
  RETURNING *
  `, [ratings.name, ratings.location, ratings.comment]);
}

module.exports = Review;
