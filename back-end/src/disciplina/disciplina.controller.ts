import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CreateProfessorDto } from '../professor/dto/create.professor.dto';
import { Professor } from '../professor/professor.entity';
import { DisciplinaService } from './disciplina.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';

@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  create(@Body() createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinaService.create(createDisciplinaDto);
  }

  @Get()
  findAll() {
    console.log(process.env.HOST);
    return this.disciplinaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disciplinaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinaService.update(+id, updateDisciplinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disciplinaService.remove(+id);
  }

  @Post('addProfessor/:id')
  addProfessor(@Param('id') id: string, @Body() professor: Professor){
    return this.disciplinaService.addProfessor(+id, professor);
  }
}
