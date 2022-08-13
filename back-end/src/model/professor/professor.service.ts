import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDTO } from 'src/model/dto/result.dto';
import { IsBoolean } from 'class-validator';

@Injectable()
export class ProfessorService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(data: CreateProfessorDto) {
    if((await this.validateIfCPFAlreadyExists(data.cpf)).length > 0) {
      throw new HttpException('Esse cadastro já existe! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
    }

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

  async validateIfCPFAlreadyExists(cpf: string) {
    const find = this.professorRepository.find({
      where: {
        cpf: cpf
      }
    });
    return find;
  }

}
