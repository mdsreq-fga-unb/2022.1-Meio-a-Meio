import { Professor } from './professor.entity';
import { CreateProfessorDto } from './dto/create.professor.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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

    try {
      const professor = new Professor();
      const generator = new RegisterGenerator();
      let amount = (await this.professorRepository.count()).valueOf();

      professor.matricula = generator.matriculaGenerator(amount, 3);
      professor.nomeCompleto = data.nomeCompleto;
      professor.cpf = data.cpf;
      professor.dataDeNascimento = data.dataDeNascimento;
      professor.educacaoPrimaria = data.educacaoPrimaria;
      professor.educacaoSecundaria = data.educacaoSecundaria;
      professor.observacao = data.observacao;
      
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
}