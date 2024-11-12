import express from "express";
import dotenv from "dotenv";
import { AppDataSource} from "./data-source";
import { console } from "inspector";

dotenv.config()

const app = express()

app.use(express.json())

app.listen(process.env.POST, () => {
    console.log("Server is running")

    AppDataSource.initialize()
        .then(() => {
            console.log("Connected to database")
        })
})