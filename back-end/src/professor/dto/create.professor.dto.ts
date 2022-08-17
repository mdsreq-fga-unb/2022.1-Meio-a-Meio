import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";
import { IsCPF, IsPhone } from "brazilian-class-validator";

export class CreateProfessorDto {

  @IsString()
  @IsNotEmpty()
  nome_completo: string;

  @IsNotEmpty()
  data_de_nascimento: string;

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
  especializacao: string;

  @IsString()
  @IsNotEmpty()
  sexo: string;

  @IsOptional()
  @IsString()
  observacao: string;
}