import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { Administrador } from './../administrador/administrador.entity';
import { Entity, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Professor extends Administrador {
  @Column({ nullable: true })
  crm: string;

  @Column({ length: 2, nullable: true })
  uf_crm: string;

  @Column({ length: 30 })
  formacao_academica: string;

  @Column({ length: 30, nullable: true })
  especializacao: string;

  @Column()
  especialista: boolean;

  @Column({ length: 200, nullable: true })
  observacao: string;

  @Column({ default: 1 })
  status: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(()=> Disciplina, (disciplina)=>disciplina.professor)
  disciplinas: Disciplina[];
}