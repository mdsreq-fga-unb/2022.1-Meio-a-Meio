import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//classe para que se declare que existe um usuario e o que ele é no db
@Entity() //no mysql vira uma tabela
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 255 })
  cpf: string;

  @Column({ length: 255 })
  birthDate: string;

  @Column({ length: 255 })
  gender: string;
}
