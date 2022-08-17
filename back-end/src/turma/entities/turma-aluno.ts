import { Column, Entity } from "typeorm";

@Entity()
export class TurmaAluno{
    @Column()
    id: number;

    @Column()
    idAluno: number;
}