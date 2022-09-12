import { TurmaService } from './../turma/turma.service';
import { AtividadeAluno } from './../atividades_aluno/atividade_aluno.entity';
import { CreateAtividadeAlunoDto } from './../atividades_aluno/dto/atividade_aluno.create.dto';
import { AlunoService } from '../aluno/aluno.service';
import { CreateAtividadeDto } from './dto/atividade.create.dto';
import { Atividade } from './atividade.entity';
import { Injectable, Inject, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class AtividadeService {
  constructor(
    @Inject('ATIVIDADE_REPOSITORY')
    private atividadeRepository: Repository<Atividade>,

    @Inject('ATIVIDADE_ALUNO_REPOSITORY')
    private atividadeAlunoRepository: Repository<AtividadeAluno>,

    private readonly alunoService: AlunoService,
    private readonly turmaService: TurmaService
  ) {}

  async create(turma_id: number, data: CreateAtividadeDto) {
    const turma = await this.turmaService.findOne(turma_id);
    if(!turma) {
      throw new BadRequestException('Turma inválida!');
    }

    if(await this.validateIfAtividadeAlreadyExists(data.nome, data.isTest)) {
      throw new BadRequestException('Atividade ou prova já cadastrada! Verifique os dados e tente novamente.');
    }

    try {
      const atividade = new Atividade();
      atividade.nome = data.nome;
      atividade.isTest = data.isTest;
      atividade.turma_id = turma_id;

      return this.atividadeRepository.save(atividade);
    } catch(error) {
      throw new UnprocessableEntityException('Erro ao cadastrar atividade');
    }
  }

  async enterNote(id: number, data: CreateAtividadeAlunoDto) {
    const atividade = await this.findAtividadeById(id);
    if(!atividade) {
      throw new BadRequestException('Atividade inválida!');
    }

    if(await this.validateIfScoreAlreadyExists(data.aluno_id, data.atividade_id)) {
      throw new BadRequestException('Já existe uma nota para esse aluno! Verifique os dados e tente novamente.');
    }

    const aluno = await this.alunoService.findStudentById(data.aluno_id);
    if(!aluno || aluno.status === 0) {
      throw new BadRequestException("Aluno inválido!")
    }

    try {
      const atividade_aluno = new AtividadeAluno();
      atividade_aluno.aluno_id = data.aluno_id;
      atividade_aluno.nota = data.nota;
      atividade_aluno.atividade_id = id;

      return this.atividadeAlunoRepository.save(atividade_aluno);
    } catch(error) {
      throw new UnprocessableEntityException("Erro ao registrar atividade!")
    }
  }

  async findAll() {
    return this.atividadeRepository.find();
  }

  async findAtividadeById(id: number) {
    return await this.atividadeRepository.findOneBy({ id });
  }

  async findAllByTurma(turma_id: number){
    return await this.atividadeRepository.find({ where: { turma_id }});
  }

  async findAllScores(ativ_id: number) {
    const alunoTurmaActivities = [], alunoNotas = [];
    const alunoAtividades = await this.atividadeAlunoRepository.find({ where: { atividade_id: ativ_id }});

    for (const line of alunoAtividades){
      const alunoObj = await this.alunoService.findStudentById(line.aluno_id);
      alunoObj["nota"] = line.nota;
      const {id, atividade_id, ...rest} = line;
      alunoTurmaActivities.push(alunoObj); 
    }
    return alunoTurmaActivities;
  }

  async validateIfAtividadeAlreadyExists(nome: string, isTest: boolean) {
    return await this.atividadeRepository.findOneBy({ nome, isTest });
  }

  async validateIfScoreAlreadyExists(aluno_id: number, atividade_id: number) {
    return await this.atividadeAlunoRepository.findOneBy({ aluno_id, atividade_id });
  }
}