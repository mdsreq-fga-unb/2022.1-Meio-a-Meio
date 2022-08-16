import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome_disciplina: string;

  @Column()
  carga_horaria: number;

  @Column()
  professor: number;

}
