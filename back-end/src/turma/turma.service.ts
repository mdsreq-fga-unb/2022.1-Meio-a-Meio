import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Turma } from './entities/turma.entity';
import { validate } from 'class-validator';
import { AlunoService } from 'src/aluno/aluno.service';
import { Aluno } from 'src/aluno/aluno.entity';

@Injectable()
export class TurmaService {
  constructor(
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>,
    private readonly alunoService: AlunoService,
  
  ){}

  async create(createTurmaDto: CreateTurmaDto) {

    let turma = new CreateTurmaDto();
    turma.nomeTurma = createTurmaDto.nomeTurma;
    turma.alunos = createTurmaDto.alunos;
    turma.dias = createTurmaDto.dias;
    turma.horarios = createTurmaDto.horarios;

    const errors = await validate(turma)

    if (errors.length > 0) {
      throw new HttpException(`Validation failed!`, HttpStatus.BAD_REQUEST);
    }     
    else {      
      const turmadto = await this.turmaRepository.save(turma);
      if(turmadto){
        return turmadto;
      } else{
        return new HttpException(`Erro ao cadastrar turma`, HttpStatus.BAD_REQUEST);
      }
    }
    
  }

  async findAll() {
    const turmas = await this.turmaRepository.find({relations: {
      alunos: true,//exibir alunos
  }})
    return turmas;
  }

  async findOne(id: number) {
    const turma = await this.turmaRepository.findOne({where:{id:id}});
    console.log(turma.alunos);
    return turma;
  }

  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return `This action updates a #${id} turma`;
  }

  remove(id: number) {
    return `This action removes a #${id} turma`;
  }

  async addAluno(idTurma: number, idAluno: Aluno[]){
    
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}});
    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }

    idAluno.forEach(aluno =>{
      turma.alunos.push(aluno)
    })

    this.turmaRepository.save(turma);
  }

  async removeAluno(idTurma: number, idAluno: Aluno){
    const turma = await this.turmaRepository.findOne({where:{id:idTurma}});
    if(!turma){
      throw new HttpException('Turma informada não existe.', HttpStatus.BAD_REQUEST);
    }
    
    const alunos = JSON.stringify(turma.alunos.filter((aluno)=>aluno.id !== idAluno.id));
    turma.alunos = JSON.parse(alunos)
    
    this.turmaRepository.save(turma);
    return turma;

  }
}