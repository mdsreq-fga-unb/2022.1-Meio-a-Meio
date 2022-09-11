import { CreateAtividadeAlunoDto } from './../atividades_aluno/dto/atividade_aluno.create.dto';
import { Atividade } from './atividade.entity';
import { CreateAtividadeDto } from './dto/atividade.create.dto';
import { AtividadeService } from './atividade.service';
import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';

@Controller('atividade')
export class AtividadeController {
  constructor(private readonly service: AtividadeService) {}

  @Post(':id')
  async create(@Param('id') turma_id: number, @Body() data: CreateAtividadeDto) {
    return this.service.create(turma_id, data);
  }

  @Put(':id')
  async enterNote(@Param('id') atividade_id: number, @Body() data: CreateAtividadeAlunoDto) {
    return this.service.enterNote(atividade_id, data);
  }

  @Get(':turma_id')
  async findAllByTurma(@Param('turma_id') turma_id: number): Promise<Atividade[]> {
    return this.service.findAllByTurma(turma_id);
  }

  @Get('listAllScores/:atividade_id')
  async findAllByScores(@Param() param): Promise<Atividade[]> {
    return this.service.findAllScores(param.atividade_id);
  }

  @Get()
  async findAll(): Promise<Atividade[]> {
    return this.service.findAll();
  }
}