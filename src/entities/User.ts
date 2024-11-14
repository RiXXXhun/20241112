import { Column,  Entity,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { Computer } from "./Computer";


@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    name: string

    @Column()
    age: number

    @OneToMany(() => Computer, (computer) => computer.user)
    computers: Computer[]
}