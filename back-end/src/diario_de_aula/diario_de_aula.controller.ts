import { CreateDiarioDeAulaDto } from './dto/diario_de_aula.create.dto';
import { DiarioDeAula } from './diario_de_aula.entity';
import { DiarioDeAulaService } from './diario_de_aula.service';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';

@Controller('diario')
export class DiarioDeAulaController {
  constructor(private readonly service: DiarioDeAulaService) {}

  @Post(':id')
  async create(@Param('id') turma_id: number, @Body() data: CreateDiarioDeAulaDto) {
    return this.service.create(turma_id, data);
  }

  @Get()
  async findAll(): Promise<DiarioDeAula[]> {
    return await this.service.findAll();
  }  

  @Get()
  async findByTurmaAndDate(@Query() query): Promise<DiarioDeAula[]> {
    return await this.service.findByTurmaAndDate(query.turma_id, query.dataDiario);
  }
}