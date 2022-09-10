import { ListaPresenca } from '../listaPresenca/listaPresenca.entity';
import { Aluno } from '../aluno/aluno.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Disciplina } from '../disciplina/disciplina.entity';
import { Professor } from '../professor/professor.entity';
import { Atividade } from '../atividade/atividade.entity';
import { DiarioDeAula } from '../diario_de_aula/diario_de_aula.entity';
import { Curso } from '../curso/curso.entity';


@Entity()
export class Turma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nome_turma: string;

    @Column({default: 0})
    status: number;

    @Column("simple-array", {nullable:true})
    data: Date[];

    @OneToMany(()=> ListaPresenca, (listaPresenca)=> listaPresenca.turma)
    listaPresenca: ListaPresenca[];

    @ManyToMany(() => Aluno)
    @JoinTable()
    alunos: Aluno[];

    @ManyToMany(()=> Disciplina)
    @JoinTable()
    disciplinas: Disciplina[];

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @OneToMany(() => Atividade, atividade => atividade.turma)
    atividade: Atividade[];

    @OneToMany(() => DiarioDeAula, diarioDeAula => diarioDeAula.turma)
    diarioDeAula: DiarioDeAula[];

    @ManyToOne(() => Curso, curso=>curso.turmas)
    curso: Curso;
}
