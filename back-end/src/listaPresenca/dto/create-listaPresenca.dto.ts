import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Aluno } from '../../aluno/aluno.entity';
import { Turma } from '../../turma/turma.entity';

export class CreateListaPresencaDto {

    @IsNotEmpty()
    data: Date;

    @IsNotEmpty()
    turma: number

    @IsOptional()
    alunos: Aluno[]
}
