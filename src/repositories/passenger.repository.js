import db from "../database/db.connection.js";
import {
    mapObjectToGenericQuery
} from "../utils/sql.utils.js";

const getPassengersTravelsByQuery = async (query) => {

    const { name, page } = query;
    const nameQuery = (name) ? name : "";
    const pageQuery = (page) ? page * 10 : 0;

    const queryValues = [
        nameQuery, 
        pageQuery
    ];

    const passengers = await db.query(
        `SELECT 
            CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger, 
            CAST(COUNT(travels."passengerId") AS INTEGER) AS travels 
        FROM travels 
        JOIN passengers ON travels."passengerId" = passengers.id
        WHERE
            "firstName" ILIKE '%'||$1||'%' OR
            "lastName" ILIKE '%'||$1||'%'
        GROUP BY passengers.id
        ORDER BY travels DESC
        LIMIT 10 OFFSET $2; 
        `, [...queryValues]
    );
    return passengers.rows;
}

const getPassengerById = async (id) => {

    const passenger = await db.query(`SELECT * FROM passengers WHERE id = $1;`,
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
    getPassengersTravelsByQuery,
    getPassengerById,
    insertPassenger
};

export default passengerRepository;