const express = require('express');
const routes = express.Router();

const OngsController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/session', SessionController.create);

routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;