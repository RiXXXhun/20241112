import express from "express"
import dotenv from "dotenv"
import { AppDataSource } from "./data-source"
import { logger } from "./middleware/loggingMiddleware"

dotenv.config()

const app = express()

app.use(express.json())
app.use(logger())

app.listen(process.env.PORT, () => {
    console.log("Server is running")

    AppDataSource.initialize()
    .then(() => {
        console.log("Connected to database")
    })
})