import dayjs from "dayjs";

export function convertDateToISOFormat (date) {

    const parts = date.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

export function dateComparisonWithToday (date) {

    const paramDate = convertDateToISOFormat(date);
    const currentDate = convertDateToISOFormat(dayjs().format("DD-MM-YYYY"));
    return (paramDate > currentDate);
}

export function dateComparison (date1, date2) {

    const ISOdate1 = convertDateToISOFormat(date1);
    const ISOdate2 = convertDateToISOFormat(date2);
    return (ISOdate1 < ISOdate2);
}