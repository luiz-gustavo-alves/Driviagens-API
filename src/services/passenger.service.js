import passengerRepository from "../repositories/passenger.repository.js";

const insertPassenger = async (payload) => {
   await passengerRepository.insertPassenger(payload);
}

const getPassengersTravelsByQuery = async (query) => {

    const passengers = await passengerRepository.getPassengersTravelsByQuery(query);
    if (passengers.length > 10) {
        throw { type: "tooManyReslts", message: "Máximo de resultados excedido." };
    }

    return passengers;
}

const passengerService = {
    insertPassenger,
    getPassengersTravelsByQuery
};

export default passengerService;