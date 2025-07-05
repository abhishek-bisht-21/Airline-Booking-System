const AirplaneService = require('../services/airplane-service');
const { StatusCodes } = require('http-status-codes');

// POST /airplanes
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED)
        .json({
            success: true, 
            message: "Airplane created successfully",
            data: airplane,
            error: {}
        });
    } catch (error) {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success: false, 
            message: "Something went wrong while creating the airplane",
            data: {},
            error: error
        });
    }
}

module.exports = {
    createAirplane
}