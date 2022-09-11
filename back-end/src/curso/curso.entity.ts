import { Disciplina } from '../disciplina/disciplina.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Turma } from '../turma/turma.entity';

@Entity() 
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;
  
  @Column({ length: 100, nullable: true })
  unidade: string;

  @Column({ default: 1 })
  status: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(()=>Disciplina, (disicplina)=> disicplina.curso)
  disciplinas: Disciplina[];

  @OneToMany(() => Turma, (turma)=> turma.curso)
  turmas: Turma[];
}