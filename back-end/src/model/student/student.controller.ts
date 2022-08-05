import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultDTO } from '../dto/result.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { CreateStudentDTO } from './dto/student.create.dto';

@Controller('aluno')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get('listar')
  async listar(): Promise<Student[]> {
    return this.service.findAll();
  }

  @Post('cadastrar')
  async create(@Body() data: CreateStudentDTO): Promise<ResultDTO> {
    return this.service.create(data);
  }
}
