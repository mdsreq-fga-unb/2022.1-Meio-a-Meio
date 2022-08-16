import { PartialType } from '@nestjs/mapped-types';
import { CreateTurmaDto } from './create-turma.dto';

export class UpdateTurmaDto extends PartialType(CreateTurmaDto) {}
