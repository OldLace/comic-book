//declare dependencies
const express = require('express');
const path = require('path');
const saga-routes = require('./routes/saga-routes')

//initialize express
const app = express();




app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



app.use(express.static('public'))


//Views setup
app.set('views',path.join(__dirname,'views'))
//EJS setup
app.set('view engine', 'ejs')



//Index
app.get('/', function(req, res) {
  res.render('saga-index.ejs');
});




//404 Error
app.get('*', function(req, res) {
    res.send("Error!! Page not found");
});

//port configuration
app.listen(3000, function() {
    console.log("Server up and running on port 3000");
});
