import db from "../database/db.connection.js";
import {
    mapObjectToGenericQuery
} from "../utils/sql.utils.js";

const getFlightById = async (id) => {

    const flight = await db.query(`SELECT * FROM flights WHERE id = $1;`,
        [id]
    );
    return flight.rows[0];
}

const getFlightsByQuery = async (query) => {

    const {
        origin,
        destination
    } = query;

    const smallerDate = query['smaller-date'];
    const biggerDate = query['bigger-date'];

    const flights = await db.query(
        `SELECT
            flights.id,
            c1.name AS origin,
            c2.name AS destination,
            to_char(flights."date", 'DD-MM-YYYY') AS date
        FROM flights
            INNER JOIN cities c1 ON c1.id = flights.origin
            INNER JOIN cities c2 ON c2.id = flights.destination
        WHERE
        (
            ($1 = 'null' OR c1.name = $1) AND
            ($2 = 'null' OR c2.name = $2) AND 
            ($3 = 'null' OR flights.date >= $3::date) AND
            ($4 = 'null' OR flights.date <= $4::date)
        )
        ORDER BY flights.date DESC;
        `, [origin, destination, smallerDate, biggerDate]
    );
    return flights.rows;
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
    getFlightsByQuery,
    insertFlight
};

export default flightRepository;