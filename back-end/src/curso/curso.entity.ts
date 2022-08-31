import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity() 
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;
  
  @Column({ length: 100, nullable: true })
  unidade: string;

  @Column()
  status: number;

  @Column({ type: 'date' })
  create_at: Date;

  @Column({ type: 'date' })
  update_at: Date;
}