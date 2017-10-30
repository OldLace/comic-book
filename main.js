// https://stackoverflow.com/questions/13418403/looping-through-json-data-in-express-js



const express = require('express');

const sagaRoutes = express.Router();
const sagaData = require('../saga.json');
const sagaController = require('../controllers/saga-controller');


let comicInfo = sagaData.comics;
let summary = comicInfo.summary;
let volumeCovers = comicInfo.cover;


