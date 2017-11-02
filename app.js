//declare dependencies
const express = require('express');
let partials = require('express-partials');
const path = require('path');

const sagaRoutes = require('./routes/saga-routes');
const sagaData = require('./saga.json');
const bodyParser = require('body-parser');
// let api = require('marvel-api');

//initialize express
const app = express();


// app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static('public'));
app.use('/saga', sagaRoutes);

//Views setup
app.set('views',path.join(__dirname,'views'));

//EJS setup
app.set('view engine', 'ejs')

//Index
// app.get('/', function(req, res) {
//   res.render('./saga-index');
// });

app.get('/reviews', function(req, res) {
  // res.send("Send Test");
  res.render('./saga-reviews');
});

app.get('/books/', function(req, res) {
  res.render('./saga-books');
});

app.get('/info/', function(req, res) {
  res.render('./saga-info');
});
// app.get('/saga-volume/:volume?', function(req, res) {
//   let volume = req.params.volume
//   res.send("Volume # " + volume)
//   res.render('saga/saga-volume');
// });

app.use('*', (req, res) => {
  res.status(404).send('Page Not Found!!!!!');
  // res.render('./404')
});

app.get('/', function(req, res) {
  res.render('/saga-index');
});

//port configuration
app.listen(3000, function() {
    console.log("Server up and running on port 3000");
});

// $( document ).ready(function() {  $("book.results.description")
// })
// marvel.creators.findByName('Goran', 'Sudzuka')
// .then(console.log)
// .fail(console.error)
// .done();
