import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Atividade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;
}