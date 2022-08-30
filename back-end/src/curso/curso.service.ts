import { Curso } from './curso.entity';
import { CreateCursoDto } from './dto/curso.create.dto';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
  constructor(
    @Inject('CURSO_REPOSITORY')
    private cursoRepository: Repository<Curso>,
  ) {}

  async create(data: CreateCursoDto) {
    if((await this.validateIfCursoAndUnidadeAlreadyExists(data.nome, data.unidade))) {
        throw new HttpException('Curso já cadastrado! Verifique os dados e tente novamente.', HttpStatus.UNPROCESSABLE_ENTITY);
      }

    try {
        const curso = new Curso();
        
        curso.nome = data.nome;
        curso.unidade = data.unidade;
        curso.status = 1;
        curso.create_at = new Date();
        curso.update_at = new Date();

        return this.cursoRepository.save(curso);
    } catch(error) {
        throw new HttpException('Erro ao cadastrar curso!', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return this.cursoRepository.find();
  }

  async validateIfCursoAndUnidadeAlreadyExists(nome: string, unidade: string) {
    return await this.cursoRepository.findOneBy({ nome, unidade });
  }
}