const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "API is LIVE",
        data: {},
        error: null
    });
}

module.exports = {
    info
}