import { HttpException, HttpStatus, Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateProfessorDto } from '../professor/dto/create.professor.dto';
import { Professor } from '../professor/professor.entity';
import { Repository } from 'typeorm';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { Disciplina } from './disciplina.entity';
import { Curso } from 'src/curso/curso.entity';

@Injectable()
export class DisciplinaService {

  constructor(
    @Inject('DISCIPLINA_REPOSITORY')
    private disciplinaRepository: Repository<Disciplina>,

    @Inject('CURSO_REPOSITORY')
    private curosService: Repository<Curso>,

    @Inject('PROFESSOR_REPOSITORY')
    private professorService: Repository<Professor>
  ){}


  async create(createDisciplinaDto: CreateDisciplinaDto) {
    
    if((await this.valiaNomeCargaHorariaIgaul(createDisciplinaDto.nome_disciplina, createDisciplinaDto.carga_horaria, createDisciplinaDto.localizacao))){
      throw new HttpException(`Disciplina já existente.`, HttpStatus.BAD_REQUEST);
    }

    try{
      const disciplina = new Disciplina();
      //disciplina.professor = createDisciplinaDto.professor;
      disciplina.nome_disciplina = createDisciplinaDto.nome_disciplina;
      disciplina.carga_horaria = createDisciplinaDto.carga_horaria;
      disciplina.localizacao = createDisciplinaDto.localizacao;
      //disciplina.curso = createDisciplinaDto.curso;
      const curso = await this.curosService.findOne({where:{id:createDisciplinaDto.curso}})
      disciplina.curso = curso;

      const professor = await this.professorService.findOne({where:{id:createDisciplinaDto.professor}})
      disciplina.professor = professor;
      
      return this.disciplinaRepository.save(disciplina);
    } catch(error){
      throw new HttpException(`Erro ao cadastrar Disciplina.`, HttpStatus.BAD_REQUEST);
    }
    
  }

  async valiaNomeCargaHorariaIgaul(nome: string, carga: number, local: string){
    const disciplina = await this.disciplinaRepository.findOne({where: {nome_disciplina:nome, carga_horaria: carga, localizacao:local}});
    return disciplina;
  }

  async findAll() {
    const disciplinas = await this.disciplinaRepository.find({relations:{professor:true}});
    return disciplinas;
  }


  async findOne(id: number) {
    const disciplina = await this.disciplinaRepository.findOne({where:{id:id}})
    return disciplina;
  }

  async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {

    const professorR = await this.professorService.findOne({where: {id:updateDisciplinaDto.professor}})

    const up = await this.disciplinaRepository.update(
      id, 
      {
        nome_disciplina: updateDisciplinaDto.nome_disciplina,
        carga_horaria: updateDisciplinaDto.carga_horaria,
        professor: professorR,
        localizacao: updateDisciplinaDto.localizacao
      });
    return up;
  }

  remove(id: number) {
    return this.disciplinaRepository.delete({id:id})
  }

  async addProfessor(idDisciplina: number, professor: Professor){
    const disciplina = await this.disciplinaRepository.findOne({where:{id:idDisciplina}, relations:{professor:true}});
    if(!disciplina){
      throw new HttpException('Disciplina informada não existe.', HttpStatus.BAD_REQUEST);
    }
    try{
      const professorSave = new Professor()
      professorSave.id = professor.id;

      disciplina.professor = professor;

      return await this.disciplinaRepository.save(disciplina);
    }
    catch(erro){
      throw new UnprocessableEntityException('Erro ao cadastrar aluno!');
    }
  }

}
