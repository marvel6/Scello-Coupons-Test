import { StatusCodes } from 'http-status-codes'
class customError extends Error {

    constructor(message, statusCode = StatusCodes.BAD_REQUEST) {

        super(message)

        this.name = this.constructor.name
        this.status = statusCode

    }
}


export default customError