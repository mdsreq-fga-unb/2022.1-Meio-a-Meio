import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 7 })
  matricula: string;

  @Column({ length: 100 })
  nome_completo: string;

  @Column({ type: 'date' })
  data_de_nascimento: string;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  rg_rne: number;

  @Column({ length: 2})
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
  especializacao: string;

  @Column({ length: 20 })
  sexo: string;

  @Column({ length: 200, nullable: true })
  observacao: string;

  @Column({ type: 'date' })
  create_at: Date;

  @Column({ type: 'date' })
  update_at: Date;
}