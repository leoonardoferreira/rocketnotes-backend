// this util folder is used to create a default message for exceptions inside the app
class AppError {
    message;
    statusCode;

    // every class has a constructor method, which is loaded automatically when the class is istantied
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;