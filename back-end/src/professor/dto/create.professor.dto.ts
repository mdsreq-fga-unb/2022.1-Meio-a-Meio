import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsEmail } from "class-validator";

export class CreateProfessorDto {

  @IsString()
  @IsNotEmpty()
  nome_completo: string;

  @IsOptional()
  @IsString()
  matricula: string;

  @IsNotEmpty()
  data_de_nascimento: Date;

  @IsNotEmpty()
  @IsString()
  nacionalidade: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  cpf: string;
<<<<<<< HEAD

=======
  
  @IsString()
>>>>>>> 9ed270feb7d9e12a3f39e205d1c9138f4eefbd0e
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