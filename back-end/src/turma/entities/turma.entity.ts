import { ListaPresenca } from 'src/listaPresenca/entities/listaPresenca.entity';
import { Aluno } from 'src/aluno/aluno.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { Professor } from 'src/professor/professor.entity';
import { Atividade } from 'src/atividade/atividade.entity';
import { DiarioDeAula } from 'src/diario_de_aula/diario_de_aula.entity';


@Entity()
export class Turma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nome: string;

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

    @OneToMany(() => DiarioDeAula, diarioDeAula => diarioDeAula)
    diarioDeAula: DiarioDeAula[];
}
