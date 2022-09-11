import { IsNotEmpty, IsString, IsEmail, IsOptional } from "class-validator";

export abstract class PessoaDto {
    @IsString()
    @IsNotEmpty()
    nome_completo: string;

    @IsOptional()
    @IsString()
    matricula: string;

    @IsString()
    @IsNotEmpty()
    sexo: string;

    @IsNotEmpty()
    data_de_nascimento: Date;

    @IsString()
    @IsNotEmpty()
    nacionalidade: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @IsNotEmpty()
    rg_rne: string;

    @IsString()
    @IsNotEmpty()
    uf_rg_rne: string;

    @IsString()
    @IsNotEmpty()
    orgao_emissor: string;

    @IsNotEmpty()
    celular: string;  
}