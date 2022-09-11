import { PessoaDto } from '../../pessoa/dto/pessoa.dto';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsEmail } from "class-validator";

export class CreateProfessorDto extends PessoaDto {
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