import { PartialType } from '@nestjs/mapped-types';
import { CreateTurmaDto } from './create-turma.dto';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, } from 'class-validator';

export class UpdateTurmaDto extends PartialType(CreateTurmaDto) {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    nome_turma: string;

    @IsOptional()
    status: number;

    @IsOptional() 
    data:Date[];
}
