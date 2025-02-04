import { Credit } from "../../credit/entities/credit.entity";

import { State } from "../../state/entities/state.entity";

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity({
    name: 'users'
})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column({
        type: "varchar",
        length: 20
    })
    name: string

    @Column({
        type: "varchar",
        length: 20
    })
    lastname: string
    
    @Column({
        type: "varchar",
        length: 10,
        unique: true,
        nullable: true
    })
    dni: string

    
    @Column({
        type: "varchar",
        length: 20,
        nullable: true
    })
    phone: string

    @Column({
        type: "varchar",
        length: 100,
        unique: true
    })
    email: string
    
    @Column({
        type: "varchar",
        length: 200,
        nullable: true
    })
    password: string

    @Column({
        type: "bool",
        default: false
    })
    is_admin: boolean


    @Column({
        type:"varchar",
        default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=", 
        nullable:true})
    img_url?:string

    @OneToMany(() => Credit, (credit) => credit.user)
    credits: Credit[]

    @ManyToOne(() => State, (state) => state.users)
    state: State
}
