import { UpdateAlunoDto } from './dto/aluno.update.dto';
import { Aluno } from '../aluno/aluno.entity';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto} from './dto/aluno.create.dto';
import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly service: AlunoService) {}

  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.service.create(createAlunoDto);
  }

  @Get()
  async findAllStudents(): Promise<Aluno[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.service.findStudentById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateAlunoDto) {
    return this.service.updateStudent(id, data);
  }
}