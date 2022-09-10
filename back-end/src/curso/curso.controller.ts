import { UpdateCursoDto } from './dto/curso.update.dto';
import { Curso } from '../curso/curso.entity';
import { CursoService } from './curso.service';
import { CreateCursoDto} from './dto/curso.create.dto';
import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { CursoAlunoDto } from '../curso_aluno/dto/curso_aluno.dto';

@Controller('curso')
export class CursoController {
  constructor(private readonly service: CursoService) {}

  @Post()
  async create(@Body() data: CreateCursoDto) {
    return this.service.create(data);
  }

  @Post(':id')
  async enrollStudent(@Param('id') id: number, @Body() data: CursoAlunoDto) {
    return this.service.enrollStudent(id, data);
  }

  @Get()
  async findAll(): Promise<Curso[]> {
    return this.service.findAll();
  }

  @Get()
  async findOne(@Param('id') id: number) {
    return this.service.findCourseById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateCursoDto) {
    return this.service.updateCourse(id, data);
  }
}