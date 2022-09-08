import { CreateCursoDto } from './curso.create.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCursoDto extends PartialType(CreateCursoDto) {}