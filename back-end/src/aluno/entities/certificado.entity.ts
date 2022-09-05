import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Certificado{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero: number;
}