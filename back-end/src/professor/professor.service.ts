import { UpdateProfessorDto } from './dto/update.professor.dto';
import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { isCPF } from "brazilian-values";

@Injectable()
export class ProfessorService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(data: CreateProfessorDto) {
    if(!isCPF(data.cpf)) {
      throw new BadRequestException('CPF inválido! Verifique e tente novamente.');
    }
    if((await this.validateIfCPFAlreadyExists(data.cpf))) {
      throw new BadRequestException('CPF já cadastrado! Verifique os dados e tente novamente.');
    }
    if(!data.especialista) {
      data.crm = null;
      data.uf_crm = null;
    } 
    else if((await this.validateIfCrmAndUfAlreadyExists(data.crm, data.uf_crm))) {
      throw new BadRequestException('CRM/UF já cadastrado ou vazio! Verifique os dados e tente novamente.');
    }

    const professor = new Professor();
    
    if(data.matricula == null) {
      const generator = new RegisterGenerator();
      let amount = (await this.professorRepository.count()).valueOf();
      professor.matricula = generator.matriculaGenerator(amount, 3);
    } 
    else if(await this.validateIfMatriculaAlreadyExists(data.matricula)) {
      throw new BadRequestException('Matrícula já cadastrada! Verifique e tente novamente.');
    }
    else {
      professor.matricula = data.matricula;
    }

    try {
      professor.nome_completo = data.nome_completo;
      professor.email = data.email;
      professor.data_de_nascimento = data.data_de_nascimento;
      professor.nacionalidade = data.nacionalidade;
      professor.cpf = data.cpf;
      professor.rg_rne = data.rg_rne;
      professor.uf_rg_rne = data.uf_rg_rne;
      professor.orgao_emissor = data.orgao_emissor;
      professor.celular = data.celular;
      professor.crm = data.crm;
      professor.uf_crm = data.uf_crm;
      professor.formacao_academica = data.formacao_academica;
      professor.especializacao = data.especializacao;
      professor.especialista = data.especialista;
      professor.sexo = data.sexo;
      professor.observacao = data.observacao;
      
      return this.professorRepository.save(professor);
    } catch(error) {
        throw new BadRequestException('Erro ao cadastrar professor');
      };
  }

  async findAll() {
    return this.professorRepository.find();
  }

  async findProfessorById(id: number) {
    const professor = await this.professorRepository.findOneBy({ id });
    if(!professor) {
      throw new NotFoundException("Professor inválido!")
    }
    return professor;
  }

  async updateProfessor(id: number, data: UpdateProfessorDto) {
    try {
      const professor = await this.findProfessorById(id);
      professor.nome_completo = data.nome_completo;
      professor.email = data.email;
      professor.data_de_nascimento = data.data_de_nascimento;
      professor.nacionalidade = data.nacionalidade;
      professor.cpf = data.cpf;
      professor.rg_rne = data.rg_rne;
      professor.uf_rg_rne = data.uf_rg_rne;
      professor.orgao_emissor = data.orgao_emissor;
      professor.celular = data.celular;
      professor.crm = data.crm;
      professor.uf_crm = data.uf_crm;
      professor.formacao_academica = data.formacao_academica;
      professor.especializacao = data.especializacao;
      professor.especialista = data.especialista;
      professor.sexo = data.sexo;
      professor.observacao = data.observacao;
      
      return this.professorRepository.save(professor);
    } catch(error) {
        throw new BadRequestException('Erro ao editar professor');
    }
  }

  async validateIfCPFAlreadyExists(cpf: string) {
    return await this.professorRepository.findOneBy({ cpf });
  }

  async validateIfCrmAndUfAlreadyExists(crm: string, uf_crm: string) {
    return await this.professorRepository.findOneBy({ crm, uf_crm });
  }

  async validateIfMatriculaAlreadyExists(matricula: string) {
    return await this.professorRepository.findOneBy({ matricula });
  }
}