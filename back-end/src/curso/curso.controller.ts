import { CursoService } from './curso.service';
import { CreateCursoDto} from './dto/curso.create.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('curso')
export class CursoController {
  constructor(private readonly service: CursoService) {}

  @Post('create')
  async create(@Body() createCursoDto: CreateCursoDto) {
    return this.service.create(createCursoDto);
  }
}