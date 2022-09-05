import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(()=>Disciplina, (disicplina)=> disicplina.curso)
  disciplinas: Disciplina[];

}