import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class CreateEnderecoDto {

  @IsNotEmpty()
  aluno_id: number;

  @IsNumber()
  @IsNotEmpty()
  CEP: number;

  @IsString()
  @IsNotEmpty()
  endereco_residencial: string;

  @IsOptional()
  @IsNumber()
  numero: number;

  @IsString()
  @IsNotEmpty()
  complemento: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}