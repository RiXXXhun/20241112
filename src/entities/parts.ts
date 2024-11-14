import { Column,  Entity,  PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Parts{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    computer_id: number

    @Column()
    name: string

    @Column()
    quantity: string
}