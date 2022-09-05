import { Curso } from 'src/curso/curso.entity';
import { Professor } from 'src/professor/professor.entity';
import { Turma } from 'src/turma/entities/turma.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable, CreateDateColumn } from 'typeorm';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome_disciplina: string;

  @Column()
  carga_horaria: number;

  @Column({default: 1})
  status: number;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(()=> Professor, (professor)=> professor.disciplinas)
  professor: Professor;

  @ManyToOne(()=>Curso)
  curso: Curso;
}
