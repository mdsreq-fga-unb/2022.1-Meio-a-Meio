import { IsNotEmpty, IsString, MaxLength, MinLength, IsOptional, ArrayContains, IsIn } from "class-validator";
import { Aluno } from "src/aluno/aluno.entity";
import { Disciplina } from "src/disciplina/disciplina.entity";
import { ListaPresenca } from "src/listaPresenca/listaPresenca.entity";


export class CreateTurmaDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    nome: string;

    @IsOptional()
    status: number;

    @IsOptional() 
    data:Date[];

    @IsOptional()
    disciplinas: Disciplina[];

    @IsOptional()
    alunos: Aluno[];

    @IsOptional()
    listaPresenca: ListaPresenca[];
}
