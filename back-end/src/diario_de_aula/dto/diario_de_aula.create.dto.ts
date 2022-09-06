import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiarioDeAulaDto {

    @IsString()
    @IsNotEmpty()
    conteudo: string;

    @IsNotEmpty()
    dataDiario: Date;
    
    @IsString()
    @IsNotEmpty()
    observacao: string;
}