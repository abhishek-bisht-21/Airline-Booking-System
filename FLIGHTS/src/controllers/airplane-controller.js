const AirplaneService = require('../services/airplane-service');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common')

// POST /airplanes
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.message = 'Airplane created successfully'
        SuccessResponse.data = airplane
        return res.status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Something went wrong while creating the airplane'
        ErrorResponse.error = error
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane
}