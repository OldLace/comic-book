//will need this later for the reviews section of the site

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
 `, [review.name, review.comment, review.stars])
};


module.exports = Review;
