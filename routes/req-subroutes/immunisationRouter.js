var express = require('express');
var immunisationRouter = express.Router();
var immunisationController = require('../../controllers/immunisationController');

immunisationRouter.get('/', immunisationController.getAllImmunisations);

immunisationRouter.get('/:id', immunisationController.getImmunisationByID);

module.exports = immunisationRouter;