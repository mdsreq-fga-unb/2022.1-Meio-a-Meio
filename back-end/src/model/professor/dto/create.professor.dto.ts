import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { IsCPF } from "brazilian-class-validator";

export class CreateProfessorDto {

  @IsString()
  @IsNotEmpty()
  nomeCompleto: string;

  @IsCPF()
  @IsNotEmpty()
  cpf: string;
 
  @IsNotEmpty()
  dataDeNascimento: string;

  @IsString()
  @IsNotEmpty()
  educacaoPrimaria: string;

  @IsString()
  educacaoSecundaria: string;

  @IsString()
  observacao: string;
}
