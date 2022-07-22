const { Router } = require('express');
const route = Router();
const { PruebaCtrl } = require('../controllers/prueba.controller');

route.get('/', PruebaCtrl.obtener)

module.exports = route
