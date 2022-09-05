import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Aluno } from 'src/aluno/entities/aluno.entity';

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

  @Column()
  status: number;

  @Column({ type: 'date' })
  create_at: Date;

  @Column({ type: 'date' })
  update_at: Date;

  @ManyToOne(() => Aluno, (aluno) => aluno.enderecos)
  aluno: Aluno;
}