import { Curso } from './curso.entity';
import { AlunoService } from 'src/aluno/aluno.service';
import { CreateCursoDto } from './dto/curso.create.dto';
import { Injectable, Inject, HttpException, HttpStatus, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
  constructor(
    @Inject('CURSO_REPOSITORY')
    private cursoRepository: Repository<Curso>,

    private readonly alunoService: AlunoService
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

        return this.cursoRepository.save(curso);
    } catch(error) {
        throw new HttpException('Erro ao cadastrar curso!', HttpStatus.BAD_REQUEST);
    }
  }

  async findCourseById(id: number) {
    return await this.cursoRepository.findOneBy({ id });
  }
  /*
  async enrollStudent(id: number, data: CursoAlunoDto) {
    const curso = await this.findCourseById(id);
    if(!curso || curso.status === 0) {
      throw new BadRequestException('Curso inválido!');
    }

    const aluno = await this.alunoService.findStudentById(data.aluno_id);
    if(!aluno || aluno.status === 0) {
      throw new BadRequestException("Aluno inválido!")
    }

    const curso_aluno = new Curso_Aluno();
    try {
      curso_aluno.aluno_id = data.aluno_id;
      curso_aluno.curso_id = id;

      return this.cursoAlunoRepository.save(curso_aluno);
    } catch(error) {
      throw new UnprocessableEntityException("Erro ao matricular aluno em curso!")
    }
  }
  */
  async validateIfCursoAndUnidadeAlreadyExists(nome: string, unidade: string) {
    return await this.cursoRepository.findOneBy({ nome, unidade });
  }

  async findAll() {
    const cursos = await this.cursoRepository.find();
    return cursos;
  }

  async findOne(id: number) {
    const curso = await this.cursoRepository.find({where:{id:id}})
    return curso;
  }
  
}