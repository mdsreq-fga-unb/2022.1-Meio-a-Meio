import { IsNotEmpty, IsString, MaxLength, MinLength, IsOptional, ArrayContains, IsIn } from "class-validator";
import { Aluno } from "src/aluno/aluno.entity";
import { Aula } from "src/aula/entities/aula.entity";
import { DiaDaSemana } from "../entities/turma-dia";


export class CreateTurmaDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    nomeTurma: string;

    @IsNotEmpty()
    dias: string[];

    @IsString()
    @IsNotEmpty()
    horarios: string;

    @IsOptional()
    alunos: Aluno[];

    @IsOptional()
    aulas: Aula[];
    
}
