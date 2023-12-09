import express from "express";
import dotenv from 'dotenv'
import helmet from "helmet";
import cors from 'cors'
import 'express-async-errors'


import router from "./Routers/coupon_router.mjs";

dotenv.config()

const app = express()


const port = process.env.PORT || 8000


//<---------ROUTES------->

app.use('/api/v1', router)

app.use(helmet())
app.use(cors({
    credentials: true,
    methods: ['POST', 'GET'],
    origin: true
}))

const start = async () => {
    try {

    } catch (error) {

    }
}


start().then(() => {

    app.listen(port, () => console.log(`app listening on port ${port}`))

})