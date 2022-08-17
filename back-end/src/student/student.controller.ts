import { StudentService } from './student.service';
import { CreateStudentDto} from './dto/student.create.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Post('create')
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.service.create(createStudentDto);
  }
}