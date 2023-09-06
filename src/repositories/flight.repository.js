import db from "../database/db.connection.js";
import {
    mapObjectToGenericQuery
} from "../utils/sql.utils.js";

const getFlightById = async (id) => {

    const flight = await db.query(`SELECT * FROM flights WHERE id = $1`,
        [id]
    );
    return flight.rows[0];
}

const insertFlight = async (payload) => {

    const {
        objectColumns,
        objectValues,
        paramsOrder
    } = mapObjectToGenericQuery(payload);

    await db.query(`INSERT INTO flights (${objectColumns}) VALUES (${paramsOrder});`, 
        [...objectValues]
    );
}

const flightRepository = {
    getFlightById,
    insertFlight
};

export default flightRepository;