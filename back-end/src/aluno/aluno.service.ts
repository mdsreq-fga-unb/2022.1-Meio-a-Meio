import { Aluno } from './aluno.entity';
import { CreateAlunoDto } from './dto/aluno.create.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
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
      throw new HttpException('CPF inválido! Verifique e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if((await this.validateIfCPFAlreadyExists(data.cpf))) {
      throw new HttpException('CPF já cadastrado! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if((await this.validateIfCrmAndUfAlreadyExists(data.crm, data.uf_crm))) {
      throw new HttpException('CRM/UF já cadastrado! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const aluno = new Aluno();

    if(data.matricula == null) {
      const generator = new RegisterGenerator();
      let amount = (await this.alunoRepository.count()).valueOf();
      aluno.matricula = generator.matriculaGenerator(amount, 3);
    } 
    else if(await this.validateIfMatriculaAlreadyExists(data.matricula)) {
      throw new HttpException('Matrícula já cadastrada! Verifique e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    else {
      aluno.matricula = data.matricula;
    }

    try {
      aluno.nome_completo = data.nome_completo;
      aluno.sexo = data.sexo;
      aluno.data_de_nascimento = data.data_de_nascimento;
      aluno.nacionalidade = data.nacionalidade;
      aluno.email = data.email;
      aluno.cpf = data.cpf;
      aluno.rg_rne = data.rg_rne;
      aluno.uf_rg_rne = data.uf_rg_rne;
      aluno.orgao_emissor = data.orgao_emissor;
      aluno.ddd = data.ddd;
      aluno.celular = data.celular;
      aluno.crm = data.crm;
      aluno.uf_crm = data.uf_crm;
      aluno.formacao_academica = data.formacao_academica;
      aluno.especializacao = data.especializacao;
      aluno.status_financeiro = data.status_financeiro;
      aluno.observacao = data.observacao;
      aluno.status = 1;  // status do aluno no sistema, por default value=1 => cadastrado.
      aluno.create_at = new Date();
      aluno.update_at = new Date();
    
      return this.alunoRepository.save(aluno);
    } catch(error) {
      throw new HttpException('Erro ao cadastrar aluno!', HttpStatus.BAD_REQUEST);
    };
  }

  async validateIfCPFAlreadyExists(cpf: string) {
    const aluno = await this.alunoRepository.findOne({
      where: {
        cpf
      }
    });
    return aluno; 
  }

  async validateIfCrmAndUfAlreadyExists(crm: string, uf_crm: string) {
    const aluno = await this.alunoRepository.findOne({
      where: {
        crm,
        uf_crm
      }
    });
    return aluno; 
  }

  async validateIfMatriculaAlreadyExists(matricula: string) {
    const aluno = await this.alunoRepository.findOne({
      where: {
        matricula
      }
    });
    return aluno; 
  }
}
