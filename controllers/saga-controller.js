const Review = require('../models/reviews');

const reviewsController = {};

reviewsController.index = (req, res) => {
  Review.findAll()
  .then(ratings => {
    res.render('/saga/ratings', {
      ratings: review
});
  });
}

reviewsController.show = (req, res) => {
  Review.findById(req.params.id)
  .then(ratings => {
    res.render('saga-index', {
      ratings: review
    })
  });
};


// reviewsController.create = (req, res) => {
//   Review.create({
//     name: req.body.name,
//     location: req.body.location,
//     comment: req.body.comment
//   }) .then((ratings  =>{
//     res.send(comment)
//   }) .catch(err={
//     res.status(500).json(err)
//   });
// ));

