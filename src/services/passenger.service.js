import passengerRepository from "../repositories/passenger.repository.js";

const insertPassenger = async (payload) => {
   await passengerRepository.insertPassenger(payload);
}

const getPassengersTravelsByQuery = async (query) => {

    const passengers = await passengerRepository.getPassengersTravelsByQuery(query);
    return passengers;
}

const passengerService = {
    insertPassenger,
    getPassengersTravelsByQuery
};

export default passengerService;