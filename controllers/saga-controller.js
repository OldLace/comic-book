const Review = require('../models/Reviews');
const fetch = require('node-fetch')
const reviewsController = {};

reviewsController.index = (req, res) => {
  Review.findAll()
  .then(ratings => {
    // res.render('/saga/ratings', {
      review: ratings
    });

// http://www.comicvine.com/api/<resource>/?api_key=<api_key>&filter=<filter>:<value>&format=json

  fetch("https://comicvine.gamespot.com/api/volume/4050-46568/?api_key=ea3f9509452cf8d0f7c2625a519a7ff496f98697&format=json")
  .then(response => response.json())
  .then(function(book){
      res.render('saga-index', { book:book})
    });
}

fetch("https://comicvine.gamespot.com/api/person/4040-40448/?api_key=ea3f9509452cf8d0f7c2625a519a7ff496f98697&format=json")
.then(response => response.json())
.then(function(author){
    res.render('saga-index', { author:author})
  });


//https://comicvine.gamespot.com/api/volume/4050-46568/?api_key=ea3f9509452cf8d0f7c2625a519a7ff496f98697&format=json

//https://comicvine.gamespot.com/api/person/4040-40448/?api_key=ea3f9509452cf8d0f7c2625a519a7ff496f98697&format=json




reviewsController.show = (req, res) => {
  Review.findById(req.params.id)
  .then(ratings => {
    res.render('saga-index', {
      ratings: review
    })
  });
};

reviewsController.getVolume = (req,res) => {
  console.log(req.params.id)
  return res.json({success:true})
}
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

module.exports = reviewsController;
