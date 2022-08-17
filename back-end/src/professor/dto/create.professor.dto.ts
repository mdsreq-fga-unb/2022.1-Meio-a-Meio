import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class CreateProfessorDto {

  @IsString()
  @IsNotEmpty()
  nome_completo: string;

  @IsNotEmpty()
  data_de_nascimento: string;

  @IsNotEmpty()
  @IsString()
  nacionalidade: string;

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
  genero: string;

  @IsOptional()
  @IsString()
  observacao: string;
}