import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

//classe para que se declare que existe um usuario e o que ele é no db
@Entity() //no mysql vira uma tabela
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  dataNascimento: Date;

  @Column()
  crm: string;

  @Column()
  senha: string;

  @Column()
  uf: string;

  @Column()
  especializacao: string;
}
