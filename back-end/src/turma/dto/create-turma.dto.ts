import { IsNotEmpty, IsString, MaxLength, MinLength, IsOptional, ArrayContains, IsIn } from "class-validator";
import { Aluno } from "../../aluno/aluno.entity";
import { Curso } from "../../curso/curso.entity";
import { Disciplina } from "../../disciplina/disciplina.entity";
import { ListaPresenca } from "../../listaPresenca/listaPresenca.entity";


export class CreateTurmaDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    nome_turma: string;

    @IsOptional()
    status: number;

    @IsOptional() 
    data:Date[];

    @IsOptional()
    disciplinas: number;

    @IsOptional()
    alunos: Aluno[];

    @IsOptional()
    listaPresenca: ListaPresenca[];

    @IsNotEmpty()
    curso: number;
}
