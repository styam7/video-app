import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/users.js'


const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("DB connected"))
        .catch((err) => { throw err })
}

app.use("/api/users", userRouter)

app.listen("5000", () => {
    connect()
    console.log("server connected...")
})