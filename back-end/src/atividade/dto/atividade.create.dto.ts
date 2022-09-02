import { IsNotEmpty, IsString } from "class-validator";

export class CreateAtividadeDto {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    isTest: boolean;
}