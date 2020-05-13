var express = require('express');
var visaRouter = express.Router();
var visaController = require('../../controllers/visaController');

visaRouter.get('/', visaController.getAllVisas); // get all visas

visaRouter.get('/:id', visaController.getVisaById); // get visa by id

module.exports = visaRouter;