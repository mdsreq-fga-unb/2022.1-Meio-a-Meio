import { IsDate, IsNotEmpty } from 'class-validator';
import { Turma } from 'src/turma/entities/turma.entity';

export class CreateAulaDto {

    @IsDate()
    @IsNotEmpty()
    data: Date;

    @IsNotEmpty()
    turma: Turma
}
