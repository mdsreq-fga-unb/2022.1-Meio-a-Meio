import { IsDate, IsNotEmpty, IsString } from "class-validator";

//Não esta validando as informações
export class CreateProfessorDto {
  
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsDate()
  @IsNotEmpty()
  dataNascimento: Date;

  @IsString()
  @IsNotEmpty()
  formacaoPrimaria: string;

  @IsString()
  formacaoSegundaria: string;

  @IsString()
  observacao: string;

}
