import { IsString, IsNotEmpty, IsDate } from "class-validator";

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

  @IsString()
  @IsNotEmpty()
  educacaoSecundaria: string;

  @IsString()
  @IsNotEmpty()
  observacao: string;
}
