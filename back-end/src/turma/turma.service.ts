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
import { Atividade } from '../atividade/atividade.entity';
import { Curso } from '../curso/curso.entity';

@Injectable()
export class TurmaService {
  constructor(
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>,

    @Inject('CURSO_REPOSITORY')
    private curosService: Repository<Curso>,
    
    @Inject('DISCIPLINA_REPOSITORY')
    private disciplinaService: Repository<Disciplina>,

    private readonly alunoService: AlunoService,
  
  ){}

  async create(createTurmaDto: CreateTurmaDto) {

    try {
      let turma = new Turma();
      turma.nome_turma = createTurmaDto.nome_turma;
      turma.status = createTurmaDto.status;
      turma.data = createTurmaDto.data;
      turma.alunos = createTurmaDto.alunos;
      turma.listaPresenca = createTurmaDto.listaPresenca;

      const curso = await this.curosService.findOne({where:{id:createTurmaDto.curso}});
      turma.curso = curso;
      if(createTurmaDto.disciplinas !== undefined){
        const disciplina = await this.disciplinaService.findOne({where: {id:createTurmaDto.disciplinas}});
        turma.disciplinas = [disciplina];
      }

      //

      return await this.turmaRepository.save(turma);
    }
    catch (error){
      throw new UnprocessableEntityException('Erro ao cadastrar Turma!');
    }    
  }

  async findAll() {
    const turmas = await this.turmaRepository.find({relations: {
      alunos: true,
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
    
    const curso = await this.curosService.findOne({where:{id:updateTurmaDto.curso}});
    const disciplina = await this.disciplinaService.findOne({where: {id:updateTurmaDto.disciplinas}});

    try{
      const turma = await this.turmaRepository.findOne({where:{id:id}});
      turma.nome_turma = updateTurmaDto.nome_turma;
      turma.status = updateTurmaDto.status;
      turma.data = updateTurmaDto.data;
      turma.curso = curso

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

  async removeAluno(idTurma: number, idAluno: number){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{alunos:true}});
    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    turma.alunos = turma.alunos.filter((aluno)=>{ return aluno.id !== idAluno});
    
    this.turmaRepository.save(turma);
    return turma;

  }

  async listaAluno(idTurma: number){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{alunos:true}});
    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    const alunos = turma.alunos;
    return alunos;
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

    turma.diarioDeAula = turma.diarioDeAula.filter((diario)=>diario.id !== diarioDeAula.id);
        
    this.turmaRepository.save(turma);
    return turma;
  }

  async listaRelatorioaDeAula(idTurma: number){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{diarioDeAula:true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    const diarios = turma.diarioDeAula;
    return  diarios;
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

  async listaDisciplina(idTurma: number){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{disciplinas:true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    const disciplinas = turma.disciplinas;
    return disciplinas;
  }

  async listaListaPresenca(idTurma: number){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{listaPresenca:true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    const presenca = turma.listaPresenca;
    return presenca;
  }

  async adicionaAtividade(idTurma: number, atividade: Atividade){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{atividade: true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    turma.atividade.push(atividade);
    return this.turmaRepository.save(turma);
  }

  async removeAtividade(idTurma: number, atividadeRemove: Atividade){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{atividade: true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    turma.atividade = turma.atividade.filter((atividade)=> {return atividade.id !== atividadeRemove.id});

    return this.turmaRepository.save(turma);
  }

  async listaAtividade(idTurma: number){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{atividade: true}});

    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    const atividades = turma.atividade;
    return atividades;
  }

  async listaProfessoresDisciplinaTurma(idTurma: number){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}, relations:{disciplinas:true}});

    const disciplinas = turma.disciplinas;

    var professores = [];
    disciplinas.forEach(async (disciplina) =>{
      const dis = await this.disciplinaService.findOne({where:{id:disciplina.id}, relations:{professor:true}});
      professores.push(dis.professor);
    })

    return professores;
  }
}