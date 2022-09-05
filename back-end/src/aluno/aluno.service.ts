import { UpdateAlunoDto } from './dto/aluno.update.dto';
import { Curso } from 'src/curso/curso.entity';
import { Endereco } from '../endereco/endereco.entity';
import { Aluno } from './entities/aluno.entity';
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

    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>
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
      aluno.status = 1;  // status do aluno no sistema, por default value=1 => cadastrado

      const alunoSalvo = await this.alunoRepository.save(aluno);
      
      /*
      const endereco = new Endereco();
      const alunoEndereco = data.endereco;
      endereco.CEP = alunoEndereco.CEP;
      endereco.numero = alunoEndereco.numero;
      endereco.bairro = alunoEndereco.bairro;
      endereco.cidade = alunoEndereco.cidade;
      endereco.complemento = alunoEndereco.complemento;
      endereco.endereco_residencia = alunoEndereco.endereco_residencial;
      endereco.estado = alunoEndereco.estado;
      endereco.status = 1;
      endereco.create_at = new Date();
      endereco.update_at = new Date();
      endereco.aluno_id = alunoSalvo.id;
    
      await this.enderecoRepository.save(endereco);
      */
      return this.alunoRepository.findOne({
        where: {
          id: aluno.id,
        },
        relations: {
          enderecos: true,
          cursos: true
        }
      });
    } catch(error) {
      throw new UnprocessableEntityException('Erro ao cadastrar aluno!');
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

  async findOne(id: number) {
    const aluno = await this.alunoRepository.findOne({where:{id:id}})
    return aluno;
  }

  async findAll() {
    const alunos = await this.alunoRepository.find();
    return alunos;
  }
}
