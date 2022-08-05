import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  cpf: string;

  @Column()
  birthDate: string;

  @Column()
  gender: string;
}
