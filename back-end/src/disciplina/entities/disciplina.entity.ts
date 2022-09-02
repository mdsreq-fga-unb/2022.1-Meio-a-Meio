import { Professor } from 'src/professor/professor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome_disciplina: string;

  @Column()
  carga_horaria: number;

  @ManyToOne(()=> Professor)
  professor: Professor;

}
