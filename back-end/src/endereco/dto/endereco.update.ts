import { PartialType } from '@nestjs/mapped-types';
import { CreateEnderecoDto } from './endereco.create.dto';

export class UpdateEnderecoDto extends PartialType(CreateEnderecoDto) {}