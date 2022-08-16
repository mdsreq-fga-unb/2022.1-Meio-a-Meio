import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CadastrarAlunoDTO {
  //dto define uma forma de comunicação entre o front e o back
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  sobrenome: string;

  @IsDate()
  dataNascimento: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  crm: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  uf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  especializacao: string;
}
