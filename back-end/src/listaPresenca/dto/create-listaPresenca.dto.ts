import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Aluno } from 'src/aluno/entities/aluno.entity';
import { Turma } from 'src/turma/entities/turma.entity';

export class CreateListaPresencaDto {

    @IsNotEmpty()
    data: Date;

    @IsNotEmpty()
    turma: Turma

    @IsOptional()
    alunos: Aluno[]
}
