import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Curso } from '../../curso/curso.entity';
import { Professor } from '../../professor/professor.entity';

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
    professor: number;

    @IsNotEmpty()
    curso: number;

    @IsOptional()
    localizacao: string
}
