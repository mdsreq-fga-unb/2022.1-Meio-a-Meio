import { Injectable,Inject, UnprocessableEntityException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { Aula } from './entities/aula.entity';
import { Repository } from 'typeorm';
import { Turma } from 'src/turma/entities/turma.entity';
import { TurmaService } from 'src/turma/turma.service';

@Injectable()
export class AulaService {
  constructor(
    @Inject('AULA_REPOSITORY')
    private aulaRepository: Repository<Aula>,
    
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>
    ){}

  async create(createAulaDto: CreateAulaDto) {

    const turma = await this.turmaRepository.findOne({where:{id:createAulaDto.turma.id}})
    if(!turma){
      throw new UnprocessableEntityException('Erro ao cadastrar aula!, Turma informada não existe');
    }

    const aula = new Aula();

    try{

      aula.data = new Date(createAulaDto.data);
      aula.turma = createAulaDto.turma;
      await this.aulaRepository.save(aula);
      return aula;

    } catch(error){
      console.log(error)
      throw new UnprocessableEntityException('Erro ao cadastrar aula!');
    }
  }

  findAll() {
    return `This action returns all aula`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aula`;
  }

  update(id: number, updateAulaDto: UpdateAulaDto) {
    return `This action updates a #${id} aula`;
  }

  remove(id: number) {
    return `This action removes a #${id} aula`;
  }
}
