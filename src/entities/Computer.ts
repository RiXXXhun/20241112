import { Column,  Entity,  JoinColumn,  ManyToMany,  OneToMany,  PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./User";
import { Part } from "./Part";


@Entity("computers")
export class Computer{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    user_id: number

    @Column()
    cpu_cores: number

    @Column()
    memory_gb: number

    @ManyToMany(() => User, (user) => user.computers)
    @JoinColumn({
        name: "user_id"
    })
    user: User

    @OneToMany(() => Part, (part) => part.computer)
    parts: Part[]

}