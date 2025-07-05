const express = require('express')
const router = express.Router();
const { AirplaneController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middleware/index')


router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)



module.exports = router; 