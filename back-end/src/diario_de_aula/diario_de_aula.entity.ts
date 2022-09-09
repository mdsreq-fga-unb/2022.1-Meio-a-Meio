import { Turma } from '../turma/turma.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity() 
export class DiarioDeAula {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    turma_id: number;

    @Column({ length: 150 })
    conteudo: string;

    @Column({ type: 'date' })
    dataDiario: Date;

    @Column({ length: 255 })
    observacao: string;

    @ManyToOne(() => Turma, turma => turma.diarioDeAula)
    turma: Turma;
}