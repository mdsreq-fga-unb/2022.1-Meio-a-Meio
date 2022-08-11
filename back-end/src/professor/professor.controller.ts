import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { ProfessorService } from './professor.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import {} from 'class-validator'

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Get()
  Teste(){
    return this.professorService.findByCPF("123456789");
     
  }

  @Post()
  create(@Body() CreateProfessorDto: CreateProfessorDto) {
    return this.professorService.create(CreateProfessorDto);
  }
}
