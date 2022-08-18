import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 7, nullable: true })
  matricula: string;

  @Column({ length: 100 })
  nome_completo: string;

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

  @Column({ length: 2})
  uf_rg_rne: string;

  @Column({ length: 10 })
  orgao_emissor: string;

  @Column()
  ddd: string;

  @Column()
  celular: string;

  @Column({ nullable: true })
  crm: string;

  @Column({ length: 2, nullable: true })
  uf_crm: string;

  @Column({ length: 30 })
  formacao_academica: string;

  @Column({ length: 30 })
  especializacao: string;

  @Column()
  especialista: boolean;

  @Column({ length: 20 })
  sexo: string;

  @Column({ length: 200, nullable: true })
  observacao: string;

  @Column()
  status: number;

  @Column({ type: 'date' })
  create_at: Date;

  @Column({ type: 'date' })
  update_at: Date;
}