import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultadoDTO } from '../dto/resultado.dto';
import { Aluno } from './aluno.entity';
import { AlunoService } from './aluno.service';
import { AlunoCadastrarDTO } from './dto/aluno.cadastrar.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly service: AlunoService) {}

  @Get('listar')
  async listar(): Promise<Aluno[]> {
    return this.service.findAll();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: AlunoCadastrarDTO): Promise<ResultadoDTO> {
    return this.service.cadastrar(data);
  }
}
