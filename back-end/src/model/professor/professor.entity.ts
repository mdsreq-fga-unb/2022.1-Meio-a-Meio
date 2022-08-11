import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  
  @PrimaryGeneratedColumn()
  matricula: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  dataNascimento: Date;

  @Column()
  formacaoPrimaria: string;

  @Column()
  formacaoSegundaria: string;
  
  @Column()
  observacao: string;

}
