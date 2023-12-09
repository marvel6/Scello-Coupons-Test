import customError from '../../utils/customErrors/customError.mjs'
import { StatusCodes } from 'http-status-codes'


class Groceries_Coupon {

    async get_all_groceries() {

        try {

        } catch (error) {

            throw new customError(error.message, StatusCodes.BAD_REQUEST)
        }

    }


    async use_coupon() {

        try {

        } catch (error) {

            throw new customError(error.message, StatusCodes.BAD_REQUEST)


        }

    }
}


export default new Groceries_Coupon()
