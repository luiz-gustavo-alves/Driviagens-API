import passengerRepository from "../repositories/passenger.repository.js";

import {
    tooManyResultsError
} from "../errors/index.errors.js";

const insertPassenger = async (payload) => {
   await passengerRepository.insertPassenger(payload);
}

const getPassengersTravelsByQuery = async (query) => {

    const passengers = await passengerRepository.getPassengersTravelsByQuery(query);
    if (passengers.length > 10) {
        throw tooManyResultsError();
    }

    return passengers;
}

const passengerService = {
    insertPassenger,
    getPassengersTravelsByQuery
};

export default passengerService;