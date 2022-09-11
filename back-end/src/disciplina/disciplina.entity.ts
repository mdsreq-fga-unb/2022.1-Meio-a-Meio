import { Curso } from '../curso/curso.entity';
import { Professor } from '../professor/professor.entity';
import { Turma } from '../turma/turma.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable, CreateDateColumn } from 'typeorm';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome_disciplina: string;

  @Column({nullable:true})
  localizacao: string;

  @Column()
  carga_horaria: number;

  @Column()
  cursoId: number;

  @Column({default: 1})
  status: number;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(()=> Professor, (professor)=> professor.disciplinas, {nullable: true})
  professor: Professor;

  @ManyToOne(()=>Curso)
  curso: Curso;
}
