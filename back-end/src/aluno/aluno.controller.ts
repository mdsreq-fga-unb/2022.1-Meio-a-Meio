import { UpdateAlunoDto } from './dto/aluno.update.dto';
import { Aluno } from 'src/aluno/aluno.entity';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto} from './dto/aluno.create.dto';
import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly service: AlunoService) {}

  @Post()
  async create(@Body() data: CreateAlunoDto) {
    return this.service.create(data);
  }

  @Get()
  async findAllStudents(): Promise<Aluno[]> {
    return this.service.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateAlunoDto) {
    return this.service.updateStudent(id, data);
  }
}