import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Aluno } from 'src/aluno/aluno.entity';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {  
    return this.turmaService.create(createTurmaDto);
  }

  @Get()
  findAll() {
    return this.turmaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmaService.update(+id, updateTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmaService.remove(+id);
  }

  @Post('addAluno/:id')
  addAluno(@Param('id') idTurma: string, @Body() idAluno: Aluno[]){
    return this.turmaService.addAluno(+idTurma, idAluno);
  }

  @Patch('removeAluno/:id')
  removeAluno(@Param('id') idTurma: string, @Body() idAluno: Aluno){
    return this.turmaService.removeAluno(+idTurma, idAluno);
  }
}
