import { Aluno } from 'src/aluno/aluno.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Turma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nomeTurma: string;

    @ManyToMany(() => Aluno)
    @JoinTable()
    alunos: number[];

    
    //@ManyToMany(() => Number)
    @Column('simple-array')
    dias: string[];

    @Column()
    horarios: string;
    
    
}
