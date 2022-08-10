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
  educaçãoPrimaria: string;

  @IsString()
  @IsNotEmpty()
  educaçãoSecundaria: string;

  @IsString()
  @IsNotEmpty()
  observacao: string;
}
