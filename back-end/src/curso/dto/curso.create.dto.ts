import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCursoDto {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsOptional()
    @IsString()
    unidade: string;
}