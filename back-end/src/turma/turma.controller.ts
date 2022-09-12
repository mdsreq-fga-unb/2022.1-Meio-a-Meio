import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Aluno } from '../aluno/aluno.entity';
import { DiarioDeAula } from '../diario_de_aula/diario_de_aula.entity';
import { CreateAlunoDto } from '../aluno/dto/aluno.create.dto';
import { Disciplina } from '../disciplina/disciplina.entity';

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

  @Put(':id')
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

  @Delete('removeAluno/:id/:alunoId')
  removeAluno(@Param('id') idTurma: string, @Param('alunoId') idAluno: string){
    return this.turmaService.removeAluno(+idTurma, parseInt(idAluno));
  }

  @Post('addDiario/:id')
  addDiario(@Param('id') idTurma: string, @Body() diario: DiarioDeAula){
    return this.turmaService.adicionaRelatorioDeAula(+idTurma, diario);
  }

  @Delete('removeDiario/:id')
  removeDiario(@Param('id') idTurma: string, @Body() diario: DiarioDeAula){
    return this.turmaService.removeRelatorioaDeAula(+idTurma, diario);
  }

  @Post('addDisciplina/:id')
  addDisciplina(@Param('id') idTurma: string, @Body() disciplina: Disciplina){
    return this.turmaService.adicionaDisciplina(+idTurma, disciplina);
  }

  @Delete('removeDisciplina/:id')
  removeDisciplina(@Param('id') idTurma: string, @Body() disciplina: Disciplina){
    return this.turmaService.removeDisciplina(+idTurma, disciplina);
  }

  @Get('alunos/:id')
  listAlunosTurma(@Param('id') idTurma: string){
    return this.turmaService.listaAluno(+idTurma);
  }

  @Get('diarios/:id')
  listDiariosDeAula(@Param('id') idTurma: string){
    return this.turmaService.listaRelatorioaDeAula(+idTurma);
  }

  @Get('disciplinas/:id')
  listDisciplinas(@Param('id') idTurma: string){
    return this.turmaService.listaDisciplina(+idTurma);
  }

  @Get('listaPresenca/:id')
  listPresenca(@Param('id') idTurma: string){
    return this.turmaService.listaListaPresenca(+idTurma);
  }

  @Get('professoresDisciplinas/:id')
  listProfessoresDisciplina(@Param('id') idTurma: string){
    return this.turmaService.listaProfessoresDisciplinaTurma(+idTurma);
  }
}
