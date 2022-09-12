import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export abstract class Pessoa {
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
  rg_rne: string;

  @Column({ length: 2 })
  uf_rg_rne: string;

  @Column({ length: 10 })
  orgao_emissor: string;

  @Column()
  celular: string;

  @Column({ default: 1 })
  status: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}