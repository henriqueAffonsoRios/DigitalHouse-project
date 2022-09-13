const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuController');

menuRouter.get('/menu/smartphones', menuController.smartphones);
menuRouter.get('/menu/perifericos', menuController.perifericos);
menuRouter.get('/menu/tablet', menuController.tablet);
menuRouter.get('/menu/tv', menuController.tv);
menuRouter.get('/buscar', menuController.seach);

menuRouter.post('/buscar', menuController.seach);


module.exports = menuRouter;