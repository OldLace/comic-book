const express = require('express');

const sagaRoutes = express.Router()
const sagaData = require('../saga.json')
const sagaController = require('../controllers/saga-controller')

sagaRoutes.get('/' ,sagaController.index)
// sagaRoutes.post('/',sagaController.create)


let comicInfo = sagaData.comics



// sagaRoutes.get('/add', (req, res)=>{
//  res.render('[')
// }


module.exports = sagaRoutes
