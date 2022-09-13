import { UpdateCursoDto } from './dto/curso.update.dto';
import { CursoAluno } from '../curso_aluno/curso_aluno.entity';
import { CursoAlunoDto } from '../curso_aluno/dto/curso_aluno.dto';
import { Curso } from './curso.entity';
import { AlunoService } from '../aluno/aluno.service';
import { CreateCursoDto } from './dto/curso.create.dto';
import { Injectable, Inject, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
  constructor(
    @Inject('CURSO_REPOSITORY')
    private cursoRepository: Repository<Curso>,

    @Inject('CURSO_ALUNO_REPOSITORY')
    private cursoAlunoRepository: Repository<CursoAluno>,

    private readonly alunoService: AlunoService
  ) { }

  async create(data: CreateCursoDto) {
    if ((await this.validateIfCursoAndUnidadeAlreadyExists(data.nome, data.unidade))) {
      throw new BadRequestException('Curso já cadastrado! Verifique os dados e tente novamente.');
    }

    try {
      const curso = new Curso();
      curso.nome = data.nome;
      curso.unidade = data.unidade;

      return this.cursoRepository.save(curso);
    } catch (error) {
      throw new UnprocessableEntityException('Erro ao cadastrar curso!');
    }
  }

  async findAll() {
    return this.cursoRepository.find();
  }

  async findCourseById(id: number) {
    const curso = await this.cursoRepository.findOneBy({ id });
    if (!curso || curso.status === 0) {
      throw new BadRequestException("Curso inválido!");
    }
    return curso;
  }

  async updateCourse(id: number, data: UpdateCursoDto) {
    if ((await this.validateIfCursoAndUnidadeAlreadyExists(data.nome, data.unidade))) {
      throw new BadRequestException('Curso já cadastrado! Verifique os dados e tente novamente.');
    }

    try {
      const curso = await this.findCourseById(id);
      curso.nome = data.nome;
      curso.unidade = data.unidade;
      curso.status = 2; // Editado

      return this.cursoRepository.save(curso);
    } catch (error) {
      throw new UnprocessableEntityException('Erro ao editar curso!');
    }
  }

  async enrollStudent(id: number, data: CursoAlunoDto) {
    const curso = await this.findCourseById(id);
    await this.alunoService.findStudentById(data.aluno_id);
  
    if(await this.validateEnrolledInCourse(id, data.aluno_id)) {
      throw new BadRequestException("Aluno já cadastrado no curso " + curso.nome + "!");
    }

    try {
      const curso_aluno = new CursoAluno();
      curso_aluno.aluno_id = data.aluno_id;
      curso_aluno.curso_id = id;
      

      return this.cursoAlunoRepository.save(curso_aluno);
    } catch (error) {
      throw new UnprocessableEntityException("Erro ao matricular aluno em curso!")
    }
  }

  async validateEnrolledInCourse(curso_id: number, aluno_id: number) {
    return await this.cursoAlunoRepository.findOneBy({ curso_id, aluno_id });
  }

  async validateIfCursoAndUnidadeAlreadyExists(nome: string, unidade: string) {
    return await this.cursoRepository.findOneBy({ nome, unidade });
  }  
}