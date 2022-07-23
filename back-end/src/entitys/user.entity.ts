
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'


//Definido entidade no Db
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: true})
    isActivate: boolean;
}