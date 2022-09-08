import { Administrador } from './../administrador/administrador.entity';
import { AtividadeAluno } from './../atividades_aluno/atividade_aluno.entity';
import { CursoAluno } from '../curso_aluno/curso_aluno.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { Endereco } from 'src/endereco/endereco.entity';

@Entity()
export class Aluno extends Administrador {
  @Column()
  crm: string;

  @Column({ length: 2 })
  uf_crm: string;

  @Column({ length: 30 })
  formacao_academica: string;

  @Column({ length: 30, nullable: true })
  especializacao: string;

  @Column()
  status_financeiro: boolean;

  @Column({ length: 100, nullable: true })
  observacao: string;

  @OneToMany(() => Endereco, endereco => endereco.aluno)
  enderecos: Endereco[];

  @OneToMany(() => CursoAluno, curso_aluno => curso_aluno)
  curso: CursoAluno[];

  @OneToMany(() => AtividadeAluno, atividadeAluno => atividadeAluno)
  atividade: AtividadeAluno[];
}