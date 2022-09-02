import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiarioDeAulaDto {

    @IsString()
    @IsNotEmpty()
    conteudo: string;

    @IsNotEmpty()
    data: Date;
    
    @IsString()
    @IsNotEmpty()
    observacao: string;
}