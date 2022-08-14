import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nomeCompleto: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ type: 'date' })
  dataDeNascimento: string;

  @Column({ length: 100 })
  educacaoPrimaria: string;

  @Column({ length: 100 })
  educacaoSecundaria: string;

  @Column({ length: 200 })
  observacao: string;
}