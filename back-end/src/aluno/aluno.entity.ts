import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Endereco } from 'src/endereco/endereco.entity';

@Entity() 
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 9 })
  matricula: string;

  @Column({ length: 100 })
  nome_completo: string;

  @Column({ length: 20 })
  sexo: string;

  @Column({ type: 'date' })
  data_de_nascimento: Date;

  @Column({ length: 30 })
  nacionalidade: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  rg_rne: number;

  @Column({ length: 2 })
  uf_rg_rne: string;

  @Column({ length: 10 })
  orgao_emissor: string;

  @Column()
  celular: string;

  @Column()
  crm: string;

  @Column({ length: 2 })
  uf_crm: string;

  @Column({ length: 30 })
  formacao_academica: string;

  @Column({ length: 30 })
  especializacao: string;

  @Column({ length: 50 })
  status_financeiro: string;

  @Column({ nullable: true })
  telefone_residencial: number;

  @Column({ length: 100, nullable: true })
  observacao: string;

  @Column()
  status: number;

  @Column({ type: 'date' })
  create_at: Date;

  @Column({ type: 'date' })
  update_at: Date;
}