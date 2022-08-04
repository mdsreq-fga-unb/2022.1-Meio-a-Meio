import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultadoDTO } from '../dto/resultado.dto';
import { Aluno } from './aluno.entity';
import { AlunoCadastrarDTO } from './dto/aluno.cadastrar.dto';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private alunoRepository: Repository<Aluno>,
  ) {}

  async findAll(): Promise<Aluno[]> {
    //lista todos os alunos
    return this.alunoRepository.find();
  }

  async cadastrar(data: AlunoCadastrarDTO): Promise<ResultadoDTO> {
    const aluno = new Aluno();
    aluno.nome = data.nome;
    aluno.sobrenome = data.sobrenome;
    aluno.cpf = data.cpf;
    aluno.dataNascimento = data.dataNascimento;
    aluno.genero = data.genero;

    return this.alunoRepository
      .save(aluno) //ele ja sabe que precisa fazer um insert
      .then(() => {
        return <ResultadoDTO>{
          status: true,
          mensagem: 'Aluno cadastrado com sucesso',
        };
      })
      .catch(() => {
        return <ResultadoDTO>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o aluno',
        };
      });
  }
}
