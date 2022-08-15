import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nomeDisciplina: string;

  @Column()
  cargaHoraria: number;

}
