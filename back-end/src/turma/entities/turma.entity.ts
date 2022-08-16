import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Turma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeTurma: string;

    /*
    @ManyToMany()
    @JoinTable()
    alunos: Alunos[]
    */
}
