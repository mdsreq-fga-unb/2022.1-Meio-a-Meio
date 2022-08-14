import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateTurmaDto {
    
    @IsString()
    @IsNotEmpty()
    nomeTurma: string;

    @IsString()
    @IsNotEmpty()
    dias: string;

    @IsString()
    @IsNotEmpty()
    horarios: string;

    @IsInt()
    @IsNotEmpty()
    professor: number;

    @IsInt()
    @IsNotEmpty()
    disciplina: number;
}
