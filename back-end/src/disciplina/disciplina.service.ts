import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { Disciplina } from './entities/disciplina.entity';

@Injectable()
export class DisciplinaService {

  constructor(
    @Inject('DISCIPLINA_REPOSITORY')
    private disciplinaRepository: Repository<Disciplina>
  ){}


  async create(createDisciplinaDto: CreateDisciplinaDto) {

    if((await this.findByName(createDisciplinaDto.nomeDisciplina))){
      throw new HttpException(`Esse nome já existe verifique os dados e tente novamente.`, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    try{
      const disciplina = new Disciplina();
      disciplina.nomeDisciplina = createDisciplinaDto.nomeDisciplina;
      disciplina.cargaHoraria = createDisciplinaDto.cargaHoraria;

      return this.disciplinaRepository.save(disciplina);
    } catch(error){
      throw new HttpException(`Erro ao cadastrar Disciplina.`, HttpStatus.BAD_REQUEST);
    }
    
  }

  async findByName(nome: string){
    const disciplina = await this.disciplinaRepository.findOne({where: {nomeDisciplina:nome}});
    return disciplina;
  }

  async findAll() {
    const disciplinas = await this.disciplinaRepository.find()
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
        nomeDisciplina: updateDisciplinaDto.nomeDisciplina,
        cargaHoraria: updateDisciplinaDto.cargaHoraria
      });
    return up;
  }

  remove(id: number) {
    return this.disciplinaRepository.delete({id:id})
  }


}
