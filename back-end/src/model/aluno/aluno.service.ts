import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDTO } from '../dto/result.dto';
import { CadastrarAlunoDTO } from './dto/aluno.cadastrar.dto';
import { Aluno } from './aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private alunoRepository: Repository<Aluno>,
  ) {}

  async findAll(): Promise<Aluno[]> {
    //lista todos os alunos
    return this.alunoRepository.find();
  }

  async cadastro(data: CadastrarAlunoDTO): Promise<ResultDTO> {
    const aluno = new Aluno();
    aluno.nome = data.nome;
    aluno.sobrenome = data.sobrenome;
    aluno.dataNascimento = data.dataNascimento;
    aluno.crm = data.crm;
    aluno.uf = data.uf;
    aluno.especializacao = data.especializacao;
    console.log('Nome:');
    console.log(aluno.nome);
    console.log(data.nome);
    console.log('Sobrenome:');
    console.log(aluno.sobrenome);
    console.log(data.sobrenome);
    console.log('Nascimento:');
    console.log(aluno.dataNascimento);
    console.log(data.dataNascimento);
    console.log('CRM:');
    console.log(aluno.crm);
    console.log(data.crm);
    console.log('UF:');
    console.log(aluno.uf);
    console.log(data.uf);
    console.log('Especializaçao:');
    console.log(aluno.especializacao);
    console.log(data.especializacao);

    return this.alunoRepository
      .save(aluno)
      .then(() => {
        return <ResultDTO>{
          status: true,
          message: 'Aluno cadastrado com sucesso',
        };
      })
      .catch(() => {
        return <ResultDTO>{
          status: false,
          message: 'Houve um erro ao cadastrar o aluno',
        };
      });
  }
}
