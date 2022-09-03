import { CreateDiarioDeAulaDto } from './dto/diario_de_aula.create.dto';
import { DiarioDeAula } from './diario_de_aula.entity';
import { DiarioDeAulaService } from './diario_de_aula.service';
import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';

@Controller('diario')
export class DiarioDeAulaController {
  constructor(private readonly service: DiarioDeAulaService) {}

  @Post(':id')
  async create(@Param('id') turma_id: number, @Body() data: CreateDiarioDeAulaDto) {
    return this.service.create(turma_id, data);
  }

  @Get(':data')
  async findByDate(@Param('data') data: Date): Promise<DiarioDeAula[]> {
    return this.service.findByDate(data);
  }

  @Get()
  async findAll(): Promise<DiarioDeAula[]> {
    return this.service.findAll();
  }
}