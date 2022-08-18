import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//classe para que se declare que existe um usuario e o que ele é no db
@Entity() //no mysql vira uma tabela
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 9 })
  matricula: string;

  @Column({ length: 100 })
  nomeCompleto: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ type: 'date' })
  dataDeNascimento: string;

  @Column({ length: 30 })
  nacionalidade: string;

  @Column()
  rgORrne: number;

  @Column({ length: 2 })
  UFrgORrne: string;

  @Column({ length: 10 })
  orgaoEmissor: string;

  @Column()
  ddd: number;

  @Column()
  celular: number;

  @Column({ length: 30 })
  endereco: string;

  @Column()
  crm: string;

  @Column({ length: 2 })
  UFcrm: string;

  @Column({ length: 30 })
  especializacao: string;

  @Column({ length: 20 })
  sexo: string;

  @Column({ length: 30 })
  enderecoResidencial: string;

  @Column({ length: 20 })
  bairro: string;

  @Column({ length: 30 })
  cidade: string;

  @Column()
  statusEndereco: string;
}
