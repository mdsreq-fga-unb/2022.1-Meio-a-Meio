import { CreateEnderecoDto } from './dto/endereco.create.dto';
import { EnderecoService } from './endereco.service';
import { Body, Controller, Put, Param } from '@nestjs/common';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly service: EnderecoService) {}

  @Put(':id')
  async create(@Param('id') id: number, @Body() data: CreateEnderecoDto) {
    return this.service.update(id, data);
  }
}