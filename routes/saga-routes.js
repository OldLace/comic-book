const express = require('express');

const sagaRouter = express.Router();
const sagaData = require('../saga.json');
const sagaController = require('../controllers/saga-controller');

// const sagaData = require('./saga.json');

// let comicInfo = sagaData.comics;
// let summary = comicInfo.summary;
// let volumeCovers = comicInfo.cover;



sagaRouter.get('/', sagaController.index);
sagaRouter.get('/:id', sagaController.show);
// sagaRoutes.post('/',sagaController.create)
sagaRouter.get('/volume/:id', sagaController.getVolume)


// not needed in this file
// let comicInfo = sagaData.comics




// sagaRoutes.get('/add', (req, res)=>{
//  res.render('[')
// }


module.exports = sagaRouter;


// http://www.comicvine.com/api/search/?api_key=your-key&query=your-character&format=json

// http://www.comicvine.com/api/
