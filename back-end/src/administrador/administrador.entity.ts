import { Pessoa } from '../pessoa/pessoa.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Administrador extends Pessoa {
  @Column()
  password: string;
}