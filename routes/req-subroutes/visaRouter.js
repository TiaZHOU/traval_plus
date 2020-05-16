var express = require('express');
var visaRouter = express.Router();
var visaController = require('../../controllers/visaController');

visaRouter.get('/', visaController.getAllVisas); // get all visas

visaRouter.get('/:country', visaController.getVisaByCountry); // get visa by country

module.exports = visaRouter;