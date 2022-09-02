import { CreateAtividadeAlunoDto } from './../atividades_aluno/dto/atividade_aluno.create.dto';
import { Atividade } from './atividade.entity';
import { CreateAtividadeDto } from './dto/atividade.create.dto';
import { AtividadeService } from './atividade.service';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('atividade')
export class AtividadeController {
  constructor(private readonly service: AtividadeService) {}

  @Post()
  async create(@Body() data: CreateAtividadeDto) {
    return this.service.create(data);
  }

  @Post(':id')
  async enrollStudent(@Param('id') id: number, @Body() data: CreateAtividadeAlunoDto) {
    return this.service.enrollStudent(id, data);
  }

  @Get()
  async findAllActivities(): Promise<Atividade[]> {
    return this.service.findAll();
  }
}