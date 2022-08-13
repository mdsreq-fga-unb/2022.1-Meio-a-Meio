import { IsString, IsNotEmpty } from "class-validator";
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
  @IsNotEmpty()
  educacaoSecundaria: string;

  @IsString()
  @IsNotEmpty()
  observacao: string;
}
