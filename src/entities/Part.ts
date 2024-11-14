import { Column,  Entity,  JoinColumn,  ManyToMany,  PrimaryGeneratedColumn } from "typeorm";
import { Computer } from "./Computer";


@Entity("parts")
export class Part{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    computer_id: number

    @Column()
    name: string

    @Column()
    quantity: string

    @ManyToMany(() => Computer, (computer) => computer.parts)
    @JoinColumn({
        name: "computer_id"
    })
    computer: Computer
}