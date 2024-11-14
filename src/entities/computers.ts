import { Column,  Entity,  PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class Computers{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    user_id: number

    @Column()
    cpu_cores: number

    @Column()
    memory_gb: number
}