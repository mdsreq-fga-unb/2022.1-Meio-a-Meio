import { Turma } from '../turma/turma.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Atividade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @Column()
    turma_id: number;

    @Column()
    isTest: boolean;

    @ManyToOne(() => Turma, turma => turma.atividade)
    turma: Turma;
}