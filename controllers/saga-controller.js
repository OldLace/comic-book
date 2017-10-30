const Review = require('../models/reviews');

const reviewsController = {};

reviewsController.index = (req, res) => {
  Review.findAll()
  .then(ratings => {
    res.render('/saga/ratings-index', {
      ratings: review
});
  });
}
