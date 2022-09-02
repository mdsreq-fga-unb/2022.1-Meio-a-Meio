import { ListaPresenca } from 'src/listaPresenca/entities/listaPresenca.entity';
import { Aluno } from 'src/aluno/aluno.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';


@Entity()
export class Turma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nomeTurma: string;

    @ManyToMany(type => Aluno, {eager:true})
    @JoinTable()
    alunos: Aluno[];

    @Column('simple-array')
    dias: string[];

    @Column()
    horarios: string;

    @OneToMany(()=> ListaPresenca, (listaPresenca)=> listaPresenca.turma)
    aulas: ListaPresenca[];
}
