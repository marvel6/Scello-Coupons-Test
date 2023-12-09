import { StatusCodes } from "http-status-codes"
import groceries from "../services/Groceries/groceries.mjs"
import customResponse from "../utils/customResponse/custom-response.mjs"

class Scello_Groceries {

    async getAllGrocery(req, res) {

        const resp = await groceries.get_all_groceries(req)

        res.status(StatusCodes.OK).json(customResponse.response({ data: resp, success: true }))

    }


    async checkCouponCode(req, res) {

        const resp = await groceries.use_coupon(req)

        res.status(StatusCodes.OK).json(customResponse.response({ data: resp, success: true }))

    }


}


export default new Scello_Groceries()