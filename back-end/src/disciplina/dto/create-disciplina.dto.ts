import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Curso } from 'src/curso/curso.entity';
import { Professor } from 'src/professor/professor.entity';

export class CreateDisciplinaDto {

    @IsString()
    @IsNotEmpty()
    nome_disciplina: string;

    @IsNumber()
    @IsNotEmpty()
    carga_horaria: number;

    @IsOptional()
    status: number;

    @IsOptional()
    professor: Professor;

    @IsNotEmpty()
    curso: Curso;
}
