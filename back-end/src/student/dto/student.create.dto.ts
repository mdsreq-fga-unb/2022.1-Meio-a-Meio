import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { IsCPF, IsDDD, IsPhone } from "brazilian-class-validator";

export class CreateStudentDto {
 
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
  nacionalidade: string;

  @IsNumber()
  @IsNotEmpty()
  rgORrne: number;

  @IsString()
  @IsNotEmpty()
  UFrgORrne: string;

  @IsString()
  @IsNotEmpty()
  orgaoEmissor: string;

  @IsNotEmpty()
  ddd: number;

  @IsPhone()
  @IsNotEmpty()
  celular: number;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsString()
  @IsNotEmpty()
  crm: string;

  @IsString()
  @IsNotEmpty()
  UFcrm: string;

  @IsString()
  @IsNotEmpty()
  especializacao: string;

  @IsString()
  @IsNotEmpty()
  sexo: string;

  @IsString()
  @IsNotEmpty()
  enderecoResidencial: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsNotEmpty()
  statusEndereco: string;
}