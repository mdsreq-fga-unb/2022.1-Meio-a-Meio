import { CursoService } from './curso.service';
import { CreateCursoDto} from './dto/curso.create.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('curso')
export class CursoController {
  constructor(private readonly service: CursoService) {}

  @Post()
  async create(@Body() createCursoDto: CreateCursoDto) {
    return this.service.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
}