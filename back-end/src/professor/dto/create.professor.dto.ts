import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsEmail } from "class-validator";

export class CreateProfessorDto {

  @IsString()
  @IsNotEmpty()
  nome_completo: string;

  @IsOptional()
  @IsString()
  matricula: string;

  @IsNotEmpty()
  data_de_nascimento: string;

  @IsNotEmpty()
  @IsString()
  nacionalidade: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  cpf: string;

  @IsNumber()
  @IsNotEmpty()
  rg_rne: number;

  @IsString()
  @IsNotEmpty()
  uf_rg_rne: string;

  @IsString()
  @IsNotEmpty()
  orgao_emissor: string;

  @IsNotEmpty()
  ddd: string;

  @IsNotEmpty()
  celular: string;

  @IsOptional()
  @IsString()
  crm: string;

  @IsOptional()
  @IsString()
  uf_crm: string;

  @IsString()
  @IsNotEmpty()
  formacao_academica: string;

  @IsString()
  @IsNotEmpty()
  especializacao: string;

  @IsBoolean()
  @IsNotEmpty()
  especialista: boolean;

  @IsString()
  @IsNotEmpty()
  sexo: string;

  @IsOptional()
  @IsString()
  observacao: string;
}