import { IsNotEmpty, IsString, MaxLength, MinLength, IsOptional, ArrayContains, IsIn } from "class-validator";
import { Aluno } from "src/aluno/aluno.entity";
import { ListaPresenca } from "src/listaPresenca/entities/listaPresenca.entity";


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
    listaPresenca: ListaPresenca[];
    
}
