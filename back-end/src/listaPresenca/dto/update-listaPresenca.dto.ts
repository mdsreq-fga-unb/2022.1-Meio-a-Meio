import { PartialType } from '@nestjs/mapped-types';
import { CreateListaPresencaDto } from './create-listaPresenca.dto';

export class UpdateListaPresencaDto extends PartialType(CreateListaPresencaDto) {}
