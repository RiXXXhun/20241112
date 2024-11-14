import dotenv from "dotenv"
import { DataSource } from "typeorm"
import { Parts } from "./entities/parts";
import { Computers } from "./entities/computers";
import { Users } from "./entities/users";


export {DataSource} from "typeorm";

dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Parts, Computers, Users],
    migrations: [],
    subscribers: []
})