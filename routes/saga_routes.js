const express = require('express');

const sagaRoutes = express.Router()
const sagaController = require('../controllers/saga-controller')

// sagaRoutes.get('/' ,sagaController.index)
// sagaRoutes.post('/',sagaController.post)


// sagaRoutes.get('/add', (req, res)=>{
//  res.render('[')
// }


module.exports = sagaRoutes
