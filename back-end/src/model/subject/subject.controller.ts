import { Body, Controller, Post } from '@nestjs/common';
import { ResultDTO } from '../dto/result.dto';
import { CreateSubjectDTO } from './dto/subject.create.dto';
import { SubjectService } from './subject.service';

@Controller('disciplina')
export class SubjectController {
  constructor(private readonly service: SubjectService) {}

  @Post('cadastrar')
  async create(@Body() data: CreateSubjectDTO): Promise<ResultDTO> {
    return this.service.create(data);
  }
}
