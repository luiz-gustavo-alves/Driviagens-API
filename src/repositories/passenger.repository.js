import db from "../database/db.connection.js";
import {
    mapObjectToGenericQuery
} from "../utils/sql.utils.js";

const getPassengerById = async (id) => {

    const passenger = await db.query(`SELECT * FROM passengers WHERE id = $1`,
        [id]
    );
    return passenger.rows[0];
}

const insertPassenger = async (payload) => {

    const {
        objectColumns,
        objectValues,
        paramsOrder
    } = mapObjectToGenericQuery(payload);

    await db.query(`INSERT INTO passengers (${objectColumns}) VALUES (${paramsOrder});`, 
        [...objectValues]
    );
}

const passengerRepository = {
    getPassengerById,
    insertPassenger
};

export default passengerRepository;