const express = require("express");
const router = express.Router();
const { infoController } = require('../../controllers');


const airplaneRoutes = require('./airplane-route')
const cityRoutes = require('./city-route');

router.use('/info', infoController.info);


router.use('/airplanes', airplaneRoutes)
router.use('/cities', cityRoutes);


module.exports = router;