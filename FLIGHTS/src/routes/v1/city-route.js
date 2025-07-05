const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middleware');

const router = express.Router();

// /api/v1/cities POST
router.post('/', 
        CityMiddlewares.validateCreateRequest,
        CityController.createCity);


module.exports = router;