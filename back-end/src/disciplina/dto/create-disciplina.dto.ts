import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateDisciplinaDto {

    @IsString()
    @IsNotEmpty()
    nomeDisciplina: string;

    @IsNumber()
    @IsNotEmpty()
    cargaHoraria: number;
}
