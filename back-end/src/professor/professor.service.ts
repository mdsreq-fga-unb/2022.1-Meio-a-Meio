import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
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
      throw new HttpException('CPF inválido! Verifique e tente novamente.', HttpStatus.BAD_REQUEST);
    }
    if((await this.validateIfCPFAlreadyExists(data.cpf))) {
      throw new HttpException('CPF já cadastrado! Verifique os dados e tente novamente.', HttpStatus.BAD_REQUEST);
    }
    if(!data.especialista) {
      data.crm = null;
      data.uf_crm = null;
    } 
    else if((await this.validateIfCrmAndUfAlreadyExists(data.crm, data.uf_crm))) {
      throw new HttpException('CRM/UF já cadastrado ou vazio! Verifique os dados e tente novamente.', HttpStatus.BAD_REQUEST);
    }

    const professor = new Professor();
    
    if(data.matricula == null) {
      const generator = new RegisterGenerator();
      let amount = (await this.professorRepository.count()).valueOf();
      professor.matricula = generator.matriculaGenerator(amount, 3);
    } 
    else if(await this.validateIfMatriculaAlreadyExists(data.matricula)) {
      throw new HttpException('Matrícula já cadastrada! Verifique e tente novamente.', HttpStatus.BAD_REQUEST);
    }
    else {
      professor.matricula = data.matricula;
    }

    try {
      professor.nome_completo = data.nome_completo;
      professor.email = data.email;
      professor.data_de_nascimento = data.data_de_nascimento;;
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
      professor.status = 1;  // status do professor no sistema, por default value=1 => cadastrado.
      professor.create_at = new Date();
      professor.update_at = new Date();
      
      return this.professorRepository.save(professor);
    } catch(error) {
        throw new HttpException('Erro ao cadastrar professor!', HttpStatus.BAD_REQUEST);
      };
  }

  async validateIfCPFAlreadyExists(cpf: string) {
    const professor = await this.professorRepository.findOne({
      where: {
        cpf
      }
    });
    return professor; 
  }

  async validateIfCrmAndUfAlreadyExists(crm: string, uf_crm: string) {
    const professor = await this.professorRepository.findOne({
      where: {
        crm,
        uf_crm
      }
    });
    return professor; 
  }

  async validateIfMatriculaAlreadyExists(matricula: string) {
    const professor = await this.professorRepository.findOne({
      where: {
        matricula
      }
    });
    return professor; 
  }
}