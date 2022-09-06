import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Aluno } from 'src/aluno/aluno.entity';
import { DiarioDeAula } from 'src/diario_de_aula/diario_de_aula.entity';
import { CreateAlunoDto } from 'src/aluno/dto/aluno.create.dto';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';

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
  addAluno(@Param('id') idTurma: string, @Body() idAluno: Aluno){
    return this.turmaService.addAluno(+idTurma, idAluno);
  }

  @Post('removeAluno/:id')
  removeAluno(@Param('id') idTurma: string, @Body() idAluno: Aluno){
    return this.turmaService.removeAluno(+idTurma, idAluno);
  }

  @Post('addDiario/:id')
  addDiario(@Param('id') idTurma: string, @Body() diario: DiarioDeAula){
    return this.turmaService.adicionaRelatorioDeAula(+idTurma, diario);
  }

  @Post('removeDiario/:id')
  removeDiario(@Param('id') idTurma: string, @Body() diario: DiarioDeAula){
    return this.turmaService.removeRelatorioaDeAula(+idTurma, diario);
  }

  @Post('addDisciplina/:id')
  addDisciplina(@Param('id') idTurma: string, @Body() disciplina: Disciplina){
    return this.turmaService.adicionaDisciplina(+idTurma, disciplina);
  }

  @Post('removeDisciplina/:id')
  removeDisciplina(@Param('id') idTurma: string, @Body() disciplina: Disciplina){
    return this.turmaService.removeDisciplina(+idTurma, disciplina);
  }
}
