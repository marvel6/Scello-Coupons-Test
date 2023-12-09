import express from 'express'
import Coupons from '../controller/Coupons.mjs'

const router = express.Router()


router.route('/cart').get(Coupons.getAllGrocery)

router.route('/coupon').post(Coupons.checkCouponCode)


export default router