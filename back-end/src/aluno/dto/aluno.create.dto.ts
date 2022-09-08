import { CreateAdmDto } from './../../administrador/dto/administrador.create.dto';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEmail, IsBoolean } from "class-validator";

export class CreateAlunoDto extends CreateAdmDto{

  @IsString()
  @IsNotEmpty()
  crm: string;

  @IsString()
  @IsNotEmpty()
  uf_crm: string;

  @IsString()
  @IsNotEmpty()
  formacao_academica: string;

  @IsBoolean()
  @IsNotEmpty()
  status_financeiro: boolean;

  @IsOptional()
  @IsString()
  especializacao: string;

  @IsOptional()
  @IsString()
  observacao: string;
}