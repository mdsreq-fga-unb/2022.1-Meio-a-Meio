import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateProfessorDto {

  @IsString()
  @IsNotEmpty()
  nomeCompleto: string;

  @IsNotEmpty()
  cpf: string;
 
  @IsNotEmpty()
  dataDeNascimento: string;

  @IsString()
  @IsNotEmpty()
  educacaoPrimaria: string;

  @IsOptional()
  @IsString()
  educacaoSecundaria: string;

  @IsOptional()
  @IsString()
  observacao: string;
}