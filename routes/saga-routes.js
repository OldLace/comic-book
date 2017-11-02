const express = require('express');

const sagaRouter = express.Router();
const sagaData = require('../saga.json');
const sagaController = require('../controllers/saga-controller');

// const sagaData = require('./saga.json');

// let comicInfo = sagaData.comics;
// let summary = comicInfo.summary;
// let volumeCovers = comicInfo.cover;



sagaRouter.get('/add', (req, res) => {
  res.render('saga/ratings', {});
})

sagaRouter.get('/', sagaController.index);
sagaRouter.get('/:id', sagaController.show);
// sagaRoutes.post('/',sagaController.create)
sagaRouter.get('/volume/:id', sagaController.getVolume)

// sagaRouter.use('/', saga-volume);

// sagaRouter.get('/404', sagaController.index);


module.exports = sagaRouter;
