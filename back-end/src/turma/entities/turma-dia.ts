import { Column, Entity } from "typeorm";

export enum DiaDaSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
}
    

@Entity()
export class TurmaDia{
    @Column()
    id: number;

    @Column({
        type: 'enum',
        enum: DiaDaSemana,
        default: DiaDaSemana.Segunda
    })
    dia: DiaDaSemana
}