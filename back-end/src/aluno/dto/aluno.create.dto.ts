import { PessoaDto } from '../../pessoa/dto/pessoa.dto';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class CreateAlunoDto extends PessoaDto {

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