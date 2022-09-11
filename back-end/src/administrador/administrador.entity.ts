import { Pessoa } from 'src/pessoa/pessoa.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Administrador extends Pessoa {
  @Column()
  password: string;
}