import { PartialType } from '@nestjs/mapped-types';
import { CreateTurmaDto } from './create-turma.dto';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, } from 'class-validator';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { Aluno } from 'src/aluno/aluno.entity';
import { ListaPresenca } from 'src/listaPresenca/entities/listaPresenca.entity';

export class UpdateTurmaDto extends PartialType(CreateTurmaDto) {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(50)
    nome: string;

    @IsOptional()
    status: number;

    @IsOptional() 
    data:Date[];
}
