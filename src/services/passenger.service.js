import passengerRepository from "../repositories/passenger.repository.js";

const insertPassenger = async (payload) => {
   await passengerRepository.insertPassenger(payload);
}

const passengerService = {
    insertPassenger
};

export default passengerService;