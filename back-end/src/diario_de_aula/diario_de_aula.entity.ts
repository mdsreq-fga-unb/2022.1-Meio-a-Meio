import { Turma } from 'src/turma/entities/turma.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity() 
export class DiarioDeAula {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    conteudo: string;

    @Column({ type: 'date' })
    data: Date;

    @ManyToOne(() => Turma, turma => turma.diarioDeAula)
    turma: DiarioDeAula[];
}