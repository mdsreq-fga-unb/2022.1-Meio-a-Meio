import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEmail } from "class-validator";
import { IsCEP, IsCPF, IsDDD, IsPhone } from "brazilian-class-validator";

export class CreateAlunoDto {
 
  @IsString()
  @IsNotEmpty()
  nome_completo: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsNotEmpty()
  data_de_nascimento: string;

  @IsString()
  @IsNotEmpty()
  nacionalidade: string;

  @IsCPF()
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

  @IsDDD()
  @IsNotEmpty()
  ddd: string;

  @IsPhone()
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