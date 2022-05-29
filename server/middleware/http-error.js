class HttpError extends Error {
    constructor(status = 500, msg = 'Internal Server Error') {
        super(msg);
        this.status = status;
    }

    toJSON() {
        return {
            status: this.status,
            message: this.message
        }
    }
};

module.exports = HttpError;