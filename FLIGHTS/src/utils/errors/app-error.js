class AppError extends Error {
    constructor(message, statusCode){
        this.message = message;
        this.statusCode = statusCode;
        this.explanation = message;
    }
}

module.export = AppError