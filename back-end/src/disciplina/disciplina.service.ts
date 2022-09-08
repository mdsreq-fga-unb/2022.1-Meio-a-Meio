import { HttpException, HttpStatus, Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateProfessorDto } from '../professor/dto/create.professor.dto';
import { Professor } from '../professor/professor.entity';
import { Repository } from 'typeorm';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { Disciplina } from './disciplina.entity';

@Injectable()
export class DisciplinaService {

  constructor(
    @Inject('DISCIPLINA_REPOSITORY')
    private disciplinaRepository: Repository<Disciplina>
  ){}


  async create(createDisciplinaDto: CreateDisciplinaDto) {
    
    if((await this.valiaNomeCargaHorariaIgaul(createDisciplinaDto.nome_disciplina, createDisciplinaDto.carga_horaria))){
      throw new HttpException(`Disciplina já existente.`, HttpStatus.BAD_REQUEST);
    }

    try{
      const disciplina = new Disciplina();
      disciplina.professor = createDisciplinaDto.professor;
      disciplina.nome_disciplina = createDisciplinaDto.nome_disciplina;
      disciplina.carga_horaria = createDisciplinaDto.carga_horaria;

      return this.disciplinaRepository.save(disciplina);
    } catch(error){
      throw new HttpException(`Erro ao cadastrar Disciplina.`, HttpStatus.BAD_REQUEST);
    }
    
  }

  async valiaNomeCargaHorariaIgaul(nome: string, carga: number){
    const disciplina = await this.disciplinaRepository.findOne({where: {nome_disciplina:nome, carga_horaria: carga}});
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
    const up = await this.disciplinaRepository.update(
      id, 
      {
        nome_disciplina: updateDisciplinaDto.nome_disciplina,
        carga_horaria: updateDisciplinaDto.carga_horaria,
        professor: updateDisciplinaDto.professor
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

      await this.disciplinaRepository.save(disciplina);
    }
    catch(erro){
      throw new UnprocessableEntityException('Erro ao cadastrar aluno!');
    }
  }

}
