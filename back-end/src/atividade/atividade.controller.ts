import { CreateAtividadeAlunoDto } from './../atividades_aluno/dto/atividade_aluno.create.dto';
import { Atividade } from './atividade.entity';
import { CreateAtividadeDto } from './dto/atividade.create.dto';
import { AtividadeService } from './atividade.service';
import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { AtividadeAluno } from 'src/atividades_aluno/atividade_aluno.entity';

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

  @Get('/aluno/:aluno_id')
  async findByStudent(@Param('aluno_id') aluno_id: number): Promise<AtividadeAluno[]> {
    return this.service.findAtividadaByStudent(aluno_id);
  }

  @Get()
  async findAll(): Promise<Atividade[]> {
    return this.service.findAll();
  }
}