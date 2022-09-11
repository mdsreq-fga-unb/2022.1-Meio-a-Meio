import { UpdateAlunoDto } from './dto/aluno.update.dto';
import { Aluno } from './aluno.entity';
import { CreateAlunoDto } from './dto/aluno.create.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, BadRequestException, UnprocessableEntityException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { isCPF } from "brazilian-values";

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private alunoRepository: Repository<Aluno>,
  ) {}

  async create(data: CreateAlunoDto) {
    if(!isCPF(data.cpf)) {
      throw new BadRequestException('CPF inválido! Verifique e tente novamente.');
    }
    if((await this.validateIfCPFAlreadyExists(data.cpf))) {
      throw new BadRequestException('CPF já cadastrado! Verifique os dados e tente novamente.');
    }
    if((await this.validateIfCrmAndUfAlreadyExists(data.crm, data.uf_crm))) {
      throw new BadRequestException('CRM/UF já cadastrado! Verifique os dados e tente novamente.');
    }

    const aluno = new Aluno();

    if(data.matricula == null) {
      const generator = new RegisterGenerator();
      let amount = (await this.alunoRepository.count()).valueOf();
      aluno.matricula = generator.matriculaGenerator(amount, 3);
    } 
    else if(await this.validateIfMatriculaAlreadyExists(data.matricula)) {
      throw new BadRequestException('Matrícula já cadastrada! Verifique e tente novamente.');
    }
    else {
      aluno.matricula = data.matricula;
    }

    try {
      aluno.nome_completo = data.nome_completo;
      aluno.sexo = data.sexo;
      aluno.data_de_nascimento = new Date(data.data_de_nascimento);
      aluno.nacionalidade = data.nacionalidade;
      aluno.email = data.email;
      aluno.cpf = data.cpf;
      aluno.rg_rne = data.rg_rne;
      aluno.uf_rg_rne = data.uf_rg_rne;
      aluno.orgao_emissor = data.orgao_emissor;
      aluno.celular = data.celular;
      aluno.crm = data.crm;
      aluno.uf_crm = data.uf_crm;
      aluno.formacao_academica = data.formacao_academica;
      aluno.especializacao = data.especializacao;
      aluno.status_financeiro = data.status_financeiro;
      aluno.observacao = data.observacao;
  
      return await this.alunoRepository.save(aluno);
    } catch(error) {
      throw new UnprocessableEntityException('Erro ao cadastrar aluno!');
    };
  }

  async findAll() {
    return this.alunoRepository.find();
  }

  async findStudentById(id: number) {
    const aluno = await this.alunoRepository.findOneBy({ id });
    if(!aluno || aluno.status === 0) {
      throw new NotFoundException("Aluno inválido!");
    }
    return aluno;
  }

  async updateStudent(id: number, data: UpdateAlunoDto) {
    try {
      const aluno = await this.findStudentById(id);
      aluno.nome_completo = data.nome_completo;
      aluno.sexo = data.sexo;
      aluno.data_de_nascimento = data.data_de_nascimento;
      aluno.nacionalidade = data.nacionalidade;
      aluno.email = data.email;
      aluno.cpf = data.cpf;
      aluno.rg_rne = data.rg_rne;
      aluno.uf_rg_rne = data.uf_rg_rne;
      aluno.orgao_emissor = data.orgao_emissor;
      aluno.celular = data.celular;
      aluno.crm = data.crm;
      aluno.uf_crm = data.uf_crm;
      aluno.formacao_academica = data.formacao_academica;
      aluno.especializacao = data.especializacao;
      aluno.status_financeiro = data.status_financeiro;
      aluno.observacao = data.observacao;

      return this.alunoRepository.save(aluno);
    } catch(error) {
      throw new UnprocessableEntityException('Erro ao editar aluno!');
    }
  }

  async validateIfCPFAlreadyExists(cpf: string) {
    return await this.alunoRepository.findOneBy({ cpf });
  }

  async validateIfCrmAndUfAlreadyExists(crm: string, uf_crm: string) {
    return await this.alunoRepository.findOneBy({ crm, uf_crm });
  }

  async validateIfMatriculaAlreadyExists(matricula: string) {
    return await this.alunoRepository.findOneBy({ matricula });
  }
}