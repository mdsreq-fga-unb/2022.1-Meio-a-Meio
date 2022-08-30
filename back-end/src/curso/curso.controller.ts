import { Curso } from 'src/curso/curso.entity';
import { CursoService } from './curso.service';
import { CreateCursoDto} from './dto/curso.create.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('curso')
export class CursoController {
  constructor(private readonly service: CursoService) {}

  @Post()
  async create(@Body() createCursoDto: CreateCursoDto) {
    return this.service.create(createCursoDto);
  }

  @Get()
  async findAllCourses(): Promise<Curso[]> {
    return this.service.findAll();
  }
}