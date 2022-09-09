import { HttpException, HttpStatus, Inject, Injectable, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Turma } from './turma.entity';
import { isArray, validate } from 'class-validator';
import { AlunoService } from '../aluno/aluno.service';
import { Aluno } from '../aluno/aluno.entity';
import { DiarioDeAula } from '../diario_de_aula/diario_de_aula.entity';
import { CreateAlunoDto } from '../aluno/dto/aluno.create.dto';
import { Disciplina } from '../disciplina/disciplina.entity';

@Injectable()
export class TurmaService {
  constructor(
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>,
    private readonly alunoService: AlunoService,
  
  ){}

  async create(createTurmaDto: CreateTurmaDto) {

    let turma = new CreateTurmaDto();
    turma.nome = createTurmaDto.nome;
    turma.status = createTurmaDto.status;
    turma.data = createTurmaDto.data;
    turma.disciplinas = createTurmaDto.disciplinas;
    turma.alunos = createTurmaDto.alunos;
    turma.listaPresenca = createTurmaDto.listaPresenca;
    turma.curso = createTurmaDto.curso;  

    const errors = await validate(turma)

    if (errors.length > 0) {
      throw new HttpException(`Validation failed!`, HttpStatus.BAD_REQUEST);
    }     
    else {      
      const turmadto = await this.turmaRepository.save(turma);
      if(turmadto){
        return turmadto;
      } else{
        return new HttpException(`Erro ao cadastrar turma`, HttpStatus.BAD_REQUEST);
      }
    }
    
  }

  async findAll() {
    const turmas = await this.turmaRepository.find({relations: {
      alunos: true,//exibir alunos
      diarioDeAula: true,
      disciplinas: true
  }})
    return turmas;
  }

  async findOne(id: number) {
    const turma = await this.turmaRepository.findOne({where:{id:id}});
    if(!turma) {
      throw new BadRequestException("Turma inválida!");
    }
    return turma;
  }

  async update(id: number, updateTurmaDto: UpdateTurmaDto) {
    try{
      const turma = await this.turmaRepository.findOne({where:{id:id}});
      turma.nome = updateTurmaDto.nome;
      turma.status = updateTurmaDto.status;
      turma.data = updateTurmaDto.data;
      turma.curso = updateTurmaDto.curso;

      return this.turmaRepository.save(turma);
    }
    catch (error){
      throw new UnprocessableEntityException('Erro ao editar aluno!');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} turma`;
  }

  async addAluno(idTurma: number, data: Aluno){
    
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{alunos:true}});
    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    const alunoExiste = turma.alunos.filter((al)=>al.id === data.id);
    
      if(alunoExiste.length != 0){
        throw new HttpException('Aluno já cadastrado na turma.', HttpStatus.BAD_REQUEST);
      }
    
    try{
      const aluno = new Aluno();
      aluno.id = data.id;

      turma.alunos.push(aluno);

      await this.turmaRepository.save(turma);
    }
    catch(erro){
      throw new UnprocessableEntityException('Erro ao cadastrar aluno!');
    }
    return turma;
  }

  async removeAluno(idTurma: number, idAluno: Aluno){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{alunos:true}});
    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    turma.alunos = turma.alunos.filter((aluno)=>{ return aluno.id !== idAluno.id});
    
    this.turmaRepository.save(turma);
    return turma;

  }

  async adicionaRelatorioDeAula(idTurma: number, diarioDeAula: DiarioDeAula){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{diarioDeAula:true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }
    if(turma.diarioDeAula.push(diarioDeAula)){
      this.turmaRepository.save(turma);
    }
    else{
      throw new HttpException('Erro ao adicionar Diario de Aula', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeRelatorioaDeAula(idTurma: number, diarioDeAula: DiarioDeAula){

    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{diarioDeAula:true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    const diarios = JSON.stringify(turma.diarioDeAula.filter((diario)=>diario.id !== diarioDeAula.id));
    turma.diarioDeAula = JSON.parse(diarios)
    
    this.turmaRepository.save(turma);
    return turma;
  }

  async adicionaDisciplina(idTurma: number, disciplina: Disciplina){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{disciplinas:true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    if(turma.disciplinas.push(disciplina)){
      this.turmaRepository.save(turma);
    }
    else{
      throw new HttpException('Erro ao adicionar Diario de Aula', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return turma;
  }

  async removeDisciplina(idTurma: number, disciplinaRemove: Disciplina){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{disciplinas:true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    turma.disciplinas = turma.disciplinas.filter((disciplina)=>{ return disciplina.id !== disciplinaRemove.id});
    
    this.turmaRepository.save(turma);
    return turma;
  }
}