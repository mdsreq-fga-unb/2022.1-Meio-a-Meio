import { PartialType } from '@nestjs/mapped-types';
import { CreateAulaDto } from './create-aula.dto';

export class UpdateAulaDto extends PartialType(CreateAulaDto) {}
