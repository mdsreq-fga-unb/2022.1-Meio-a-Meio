import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoDto } from './aluno.create.dto';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {}