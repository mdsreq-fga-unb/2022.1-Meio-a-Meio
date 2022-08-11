import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DiaDaSemana } from './dias.enum';

@Entity()
export class Turma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeTurma: string;

    @Column()
    dias: string; //[DiaDaSemana];

    @Column()
    horarios: string;

    @Column()
    professor: number;

    @Column()
    disciplina: number;
}
