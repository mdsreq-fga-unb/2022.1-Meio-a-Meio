import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { ProfessorService } from './professor.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ResultDTO } from '../dto/result.dto';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post('create')
  async create(@Body() createProfessorDto: CreateProfessorDto): Promise<ResultDTO>  {
    return this.professorService.create(createProfessorDto);
  }
}
