import dotenv from "dotenv"
import { DataSource } from "typeorm"
import { Part } from "./entities/Part";
import { Computer } from "./entities/Computer";
import { User } from "./entities/User";


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
    entities: [Part, Computer, User],
    migrations: [],
    subscribers: []
})