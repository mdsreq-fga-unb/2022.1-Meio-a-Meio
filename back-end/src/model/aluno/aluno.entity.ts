import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//classe para que se declare que existe um usuario e o que ele é no db
@Entity() //no mysql vira uma tabela
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  sobrenome: string;

  @Column({ length: 255 })
  cpf: string;

  @Column({ length: 255 })
  dataNascimento: string;

  @Column({ length: 255 })
  genero: string;
}
