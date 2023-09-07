export const tooManyResultsError = (message) => {

    if (!message) {
        message = "Too many results";
    }

    return {
        type: "tooManyResults",
        message: `${message}`
    }
}