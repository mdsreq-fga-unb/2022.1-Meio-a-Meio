import { Entity, Column, OneToMany } from 'typeorm';
import { Endereco } from 'src/endereco/endereco.entity';
import { Administrador } from 'src/administrador/administrador.entity';
import { CursoAluno } from 'src/curso_aluno/curso_aluno.entity';
import { AtividadeAluno } from 'src/atividades_aluno/atividade_aluno.entity';

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