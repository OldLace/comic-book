const express = require('express');

const sagaRoutes = express.Router()
const sagaData = require('../saga.json')
const sagaController = require('../controllers/saga-controller')

// const sagaData = require('./saga.json');

let comicInfo = sagaData.comics;
let summary = comicInfo.summary;
let volumeCovers = comicInfo.cover;



// sagaRoutes.get('/' ,sagaController.index)
// sagaRoutes.post('/',sagaController.create)



// not needed in this file
// let comicInfo = sagaData.comics




// sagaRoutes.get('/add', (req, res)=>{
//  res.render('[')
// }


module.exports = sagaRoutes


// http://www.comicvine.com/api/search/?api_key=your-key&query=your-character&format=json

// http://www.comicvine.com/api/
