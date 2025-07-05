const AirplaneRepository = require('../repositories/airplane-repository');
const { Logger } = require('../config/logger-config');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        Logger.error("Something went wrong in the airplane service: createAirplane");
        throw error;
    }
}

module.exports = {
    createAirplane
}
