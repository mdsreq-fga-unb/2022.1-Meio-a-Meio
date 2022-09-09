import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Aluno } from '../aluno/aluno.entity';

@Entity()
export class AtividadeAluno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    aluno_id: number;

    @Column()
    atividade_id: number;

    @Column()
    nota: number;

    @ManyToOne(() => Aluno, aluno => aluno.atividade)
    aluno: Aluno[];
}