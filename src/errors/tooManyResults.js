export const tooManyResultsError = (message) => {

    if (!message) {
        message = "Máximo de resultados excedido";
    }

    return {
        type: "tooManyResults",
        message: `${message}`
    }
}