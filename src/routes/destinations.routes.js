const router = require('express').Router();
const controller = require('../controllers/destinations.controller');

router.get('/', controller.listDestinations);

module.exports = router;

