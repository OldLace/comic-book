//declare dependencies
let express = require('express');
//initialize express
let app = express();

let path = require('path');

app.set('view engine', 'ejs');

// Routing

//Index
app.get('/', function(req, res) {
  res.render('saga-index.ejs');
});

// Volume Pages
// app.get('/:saga/volume?'', function(req, res) {
//     let volume = req.params.volume;
//     res.render("saga-index.ejs");
// });

//404 Error
app.get('*', function(req, res) {
    res.send("Error!! Page not found");
});


app.listen(3000, function() {
    console.log("Server 3000 in the year 3000");
});
