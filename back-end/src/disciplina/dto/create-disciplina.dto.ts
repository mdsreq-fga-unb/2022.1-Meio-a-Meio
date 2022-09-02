import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Professor } from 'src/professor/professor.entity';

export class CreateDisciplinaDto {

    @IsString()
    @IsNotEmpty()
    nome_disciplina: string;

    @IsNumber()
    @IsNotEmpty()
    carga_horaria: number;

    @IsNumber()
    @IsOptional()
    professor: Professor;
}
