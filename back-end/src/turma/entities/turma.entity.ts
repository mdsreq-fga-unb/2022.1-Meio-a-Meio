import { Aula } from 'src/aula/entities/aula.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

    @OneToMany(()=> Aula, (aula)=> aula.turma)
    aulas: Aula[];
}
