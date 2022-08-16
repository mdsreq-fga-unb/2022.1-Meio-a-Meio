import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultDTO } from '../dto/result.dto';
import { Aluno } from './aluno.entity';
import { AlunoService } from './aluno.service';
import { CadastrarAlunoDTO } from './dto/aluno.cadastrar.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly service: AlunoService) {}

  @Get('listar')
  async listar(): Promise<Aluno[]> {
    return this.service.findAll();
  }

  @Post('cadastrar')
  async create(@Body() data: CadastrarAlunoDTO): Promise<ResultDTO> {
    return this.service.cadastro(data);
  }
}
