import { IsInt, IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";
import { DiaDaSemana } from "../entities/turma-dia";


export class CreateTurmaDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    nomeTurma: string;

    @IsNotEmpty()
    dias: DiaDaSemana[];

    @IsString()
    @IsNotEmpty()
    horarios: string;

}
