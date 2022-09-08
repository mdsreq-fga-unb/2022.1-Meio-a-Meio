import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Aluno } from '../aluno/aluno.entity';

@Entity() 
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  aluno_id: number;

  @Column()
  CEP: number;

  @Column({ length: 40 })
  endereco_residencial: string;

  @Column({ nullable: true })
  numero: number;

  @Column({ length: 15 })
  complemento: string;

  @Column({ length: 20 })
  bairro: string;

  @Column({ length: 30 })
  cidade: string;

  @Column({ length: 30 })
  estado: string;

  @Column({ default: 1 })
  status: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @ManyToOne(() => Aluno, (aluno) => aluno.enderecos)
  aluno: Aluno;
}