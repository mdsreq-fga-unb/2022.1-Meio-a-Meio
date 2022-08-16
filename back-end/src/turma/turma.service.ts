import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Turma } from './entities/turma.entity';
import { validate } from 'class-validator';

@Injectable()
export class TurmaService {
  constructor(
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>,
  ){}

  async create(createTurmaDto: CreateTurmaDto) {

    let turma = new CreateTurmaDto();
    turma.nomeTurma = createTurmaDto.nomeTurma;
    turma.disciplina = createTurmaDto.disciplina;
    turma.professor = createTurmaDto.professor;
    turma.horarios = createTurmaDto.horarios;
    turma.dias = createTurmaDto.dias;

    const errors = await validate(turma)
    if (errors.length > 0) {
      //Detalhar erro
      throw new Error(`Validation failed!`);
    }     
    else {

      //busca professor
      
      await this.turmaRepository.save(turma).then(()=>{
        console.log("Cadastro")
        return 'Professor cadastrado!';
      })
      .catch(()=>{
        return 'Erro ao cadastrar professor';
      })
    return 'This action adds a new turma';
    }
    
  }

  async findAll() {
    const turmas = await this.turmaRepository.find()
    return turmas;
  }

  async findOne(id: number) {
    const disciplina = await this.turmaRepository.findOne({where:{id:id}})
    return disciplina;
  }

  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return `This action updates a #${id} turma`;
  }

  remove(id: number) {
    return `This action removes a #${id} turma`;
  }
}
