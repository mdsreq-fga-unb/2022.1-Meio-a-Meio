import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateDisciplinaDto {

    @IsString()
    @IsNotEmpty()
    nome_disciplina: string;

    @IsNumber()
    @IsNotEmpty()
    carga_horaria: number;

    @IsNumber()
    @IsNotEmpty()
    professor: number;
}
