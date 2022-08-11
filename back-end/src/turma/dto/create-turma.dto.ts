import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";
import { DiaDaSemana } from "../entities/dias.enum";

export class CreateTurmaDto {
    
    @IsString()
    @IsNotEmpty()
    nomeTurma: string;

    @IsEnum(DiaDaSemana)
    @IsNotEmpty()
    dias: [DiaDaSemana];

    @IsString()
    @IsNotEmpty()
    horarios: string;

    @IsInt()
    @IsNotEmpty()
    professor: number;

    @IsInt()
    @IsNotEmpty()
    disciplina: number;
}
