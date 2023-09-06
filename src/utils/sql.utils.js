export function mapObjectToGenericQuery(object, paramsOffset = 1) {

    const objectColumns = Object.keys(object).map(key => `"${key}"`).join(",");
    const objectValues = Object.values(object);
    const paramsOrder = objectValues.map((_, index) => `$${index + paramsOffset}`).join(",");

    return { objectColumns, objectValues, paramsOrder };
}