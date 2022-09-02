import { CursoAlunoDto } from '../curso_aluno/dto/curso_aluno.dto';
import { Curso } from 'src/curso/curso.entity';
import { CursoService } from './curso.service';
import { CreateCursoDto} from './dto/curso.create.dto';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('curso')
export class CursoController {
  constructor(private readonly service: CursoService) {}

  @Post()
  async create(@Body() createCursoDto: CreateCursoDto) {
    return this.service.create(createCursoDto);
  }

  @Post(':id')
  async enrollStudent(@Param('id') id: number, @Body() data: CursoAlunoDto) {
    return this.service.enrollStudent(id, data);
  }

  @Get()
  async findAllCourses(): Promise<Curso[]> {
    return this.service.findAll();
  }
}