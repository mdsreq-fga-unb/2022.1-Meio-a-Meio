import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Aluno } from 'src/aluno/aluno.entity';

@Entity() 
export class Curso_Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  curso_id: number;

  @Column()
  aluno_id: number;

  @ManyToOne(() => Aluno, aluno => aluno.curso)
  aluno: Aluno[];
}