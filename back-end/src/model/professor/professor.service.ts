import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDTO } from 'src/model/dto/result.dto';

@Injectable()
export class ProfessorService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(data: CreateProfessorDto) {
    try {
      const professor = new Professor();
      professor.nomeCompleto = data.nomeCompleto;
      professor.cpf = data.cpf;
      professor.dataDeNascimento = data.dataDeNascimento;
      professor.educaçãoPrimaria = data.educacaoPrimaria;
      professor.educacaoSecundaria = data.educacaoSecundaria;
      professor.observacao = data.observacao;
      
      return this.professorRepository.save(professor);
    } catch(error) {
        throw new HttpException('Erro ao cadastrar professor!', HttpStatus.BAD_REQUEST);
      };
  }
}
