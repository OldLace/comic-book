//declare dependencies
const express = require('express');
let partials = require('express-partials')
const path = require('path');

//initialize express
const app = express();

const sagaRoutes = require('./routes/saga-routes.js')



// app.use(logger('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))



app.use(express.static('public'))


//Views setup
app.set('views',path.join(__dirname,'views'))
//EJS setup
app.set('view engine', 'ejs')



//Index
app.get('/', function(req, res) {
  res.render('./saga-index');
});

app.get('/saga-volume/:volume?', function(req, res) {
  let volume = req.params.volume
  res.send("Volume # " + volume)
  // res.render('./saga-volume.ejs');
});




//404 Error
app.get('*', function(req, res) {
    res.send("Error!! Page not found");
});

//port configuration
app.listen(3000, function() {
    console.log("Server up and running on port 3000");
});
