import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessorService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(data: CreateProfessorDto) {
    if((await this.validateIfCPFAlreadyExists(data.cpf))) {
      throw new HttpException('CPF já cadastrado! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if((await this.validateIfCrmAndUfAlreadyExists(data.crm, data.uf_crm))) {
      throw new HttpException('CRM/UF já cadastrado! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    try {
      const professor = new Professor();
      const generator = new RegisterGenerator();
      let amount = (await this.professorRepository.count()).valueOf();

      professor.matricula = generator.matriculaGenerator(amount, 3);
      professor.nome_completo = data.nome_completo;
      professor.data_de_nascimento = data.data_de_nascimento;
      professor.nacionalidade = data.nacionalidade;
      professor.cpf = data.cpf;
      professor.rg_rne = data.rg_rne;
      professor.uf_rg_rne = data.uf_rg_rne;
      professor.orgao_emissor = data.orgao_emissor;
      professor.ddd = data.ddd;
      professor.celular = data.celular;
      professor.crm = data.crm;
      professor.uf_crm = data.uf_crm;
      professor.formacao_academica = data.formacao_academica;
      professor.especializacao = data.especializacao;
      professor.genero = data.genero;
      professor.observacao = data.observacao;
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
}