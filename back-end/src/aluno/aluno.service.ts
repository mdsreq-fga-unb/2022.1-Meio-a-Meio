import { Aluno } from './aluno.entity';
import { CreateAlunoDto } from './dto/aluno.create.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private alunoRepository: Repository<Aluno>,
  ) {}

  async create(data: CreateAlunoDto) {
    if((await this.validateIfCPFAlreadyExists(data.cpf))) {
      throw new HttpException('CPF já cadastrado! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    if((await this.validateIfCrmAndUfAlreadyExists(data.crm, data.uf_crm))) {
      throw new HttpException('CRM/UF já cadastrado! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    try {
      const aluno = new Aluno();
      const generator = new RegisterGenerator();
      let amount = (await this.alunoRepository.count()).valueOf();

      aluno.matricula = generator.matriculaGenerator(amount, 5);
      aluno.nome_completo = data.nome_completo;
      aluno.genero = data.genero;
      aluno.data_de_nascimento = data.data_de_nascimento;
      aluno.nacionalidade = data.nacionalidade;
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
      aluno.createAt = new Date();
      aluno.updateAt = new Date();
    
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
}
