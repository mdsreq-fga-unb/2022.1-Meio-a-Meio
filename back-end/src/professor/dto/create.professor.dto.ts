import { CreateAdmDto } from './../../administrador/dto/administrador.create.dto';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsEmail } from "class-validator";

export class CreateProfessorDto extends CreateAdmDto {
  @IsOptional()
  @IsString()
  crm: string;

  @IsOptional()
  @IsString()
  uf_crm: string;

  @IsString()
  @IsNotEmpty()
  formacao_academica: string;

  @IsBoolean()
  @IsNotEmpty()
  especialista: boolean;

  @IsOptional()
  @IsString()
  especializacao: string;

  @IsOptional()
  @IsString()
  observacao: string;
}