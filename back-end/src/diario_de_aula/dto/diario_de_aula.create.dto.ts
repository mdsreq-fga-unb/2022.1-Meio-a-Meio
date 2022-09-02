import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateDiarioDeAulaDto {
    
    @IsString()
    @IsNotEmpty()
    conteudo: string;

    @IsNotEmpty()
    data: Date;
}