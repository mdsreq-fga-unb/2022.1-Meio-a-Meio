import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEmail } from "class-validator";

export class CreateAlunoDto {
 
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

  @IsString()
  @IsNotEmpty()
  crm: string;

  @IsString()
  @IsNotEmpty()
  uf_crm: string;

  @IsString()
  @IsNotEmpty()
  formacao_academica: string;

  @IsString()
  @IsNotEmpty()
  especializacao: string;

  @IsString()
  @IsNotEmpty()
  status_financeiro: string;

  @IsOptional()
  @IsString()
  observacao: string;
}