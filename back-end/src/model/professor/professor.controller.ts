import { CreateProfessorDto } from './dto/create.professor.dto';
import { ProfessorService } from './professor.service';
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post('create')
  async create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professorService.create(createProfessorDto);
  }
}