const express = require('express')
const router = express.Router();
const { AirplaneController} = require('../../controllers')

router.post('/', AirplaneController.createAirplane)



module.exports = router; 