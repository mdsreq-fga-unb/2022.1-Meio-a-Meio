import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDTO } from '../dto/result.dto';

@Injectable()
export class ProfessorService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(data: CreateProfessorDto): Promise<ResultDTO> {
    const professor = new Professor();
    professor.nomeCompleto = data.nomeCompleto;
    professor.cpf = data.cpf;
    professor.dataDeNascimento= data.dataDeNascimento;
    professor.educaçãoPrimaria = data.educacaoPrimaria;
    professor.educacaoSecundaria = data.educacaoSecundaria;
    professor.observacao = data.observacao;
    
    return this.professorRepository
      .save(professor) 
      .then(() => {
        return <ResultDTO>{
          status: true,
          message: 'Novo professor adicionado com sucesso!',
        };
      })
      .catch(() => {
        return <ResultDTO>{
          status: false,
          message: 'Erro ao cadastrar professor!',
        };
      });
  }
}
