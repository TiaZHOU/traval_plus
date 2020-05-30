var express = require('express');
var immunisationRouter = express.Router();
var immunisationController = require('../../controllers/immunisationController');

immunisationRouter.get('/', immunisationController.getAllImmunisations);

immunisationRouter.get('/:country', immunisationController.getImmunisationByCountry);

module.exports = immunisationRouter;