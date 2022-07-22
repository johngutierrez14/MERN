const { MultiplicationController } = require('./controller');

const express = require('express');

const router = express.Router();

module.exports.MultiplicationAPI = (app) => {
  router
    .get('/', MultiplicationController.getOperations)
    .get('/:id', MultiplicationController.getOperation)
    .post('/', MultiplicationController.createOperations)
  
  app.use('/api/mult', router)
}