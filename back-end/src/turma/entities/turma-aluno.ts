import { Column, Entity } from "typeorm";

@Entity()
export class TuramAluno{
    @Column()
    id: number;

    @Column()
    idAluno: number;
}