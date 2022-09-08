import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum DiaDaSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
}

export const DiasSemana = ['Segunda','Terca','Quarta','Quinta','Sexta','Sabado','Domingo'];

@Entity()
export class TurmaDia{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: DiaDaSemana,
        default: DiaDaSemana.Segunda
    })
    dia: DiaDaSemana
}