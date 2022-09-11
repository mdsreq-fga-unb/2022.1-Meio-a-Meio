import { Injectable,Inject, UnprocessableEntityException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateListaPresencaDto } from './dto/create-listaPresenca.dto';
import { UpdateListaPresencaDto } from './dto/update-listaPresenca.dto';
import { ListaPresenca } from './listaPresenca.entity';
import { Repository } from 'typeorm';
import { Turma } from '../turma/turma.entity';
import { TurmaService } from '../turma/turma.service';

@Injectable()
export class ListaPresencaService {
  constructor(
    @Inject('LISTAPRESENCA_REPOSITORY')
    private listaPresencaRepository: Repository<ListaPresenca>,
    
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>
    ){}

  async create(createListaPresencaDto: CreateListaPresencaDto) {

    const turma = await this.turmaRepository.findOne({where:{id:createListaPresencaDto.turma}})
    if(!turma){
      throw new UnprocessableEntityException('Erro ao cadastrar lista de presença!, Turma informada não existe');
    }

    const listaPresenca = new ListaPresenca();

    try{

      listaPresenca.data = new Date(createListaPresencaDto.data);
      listaPresenca.turma = turma;
      await this.listaPresencaRepository.save(listaPresenca);
      return listaPresenca;

    } catch(error){
      console.log(error)
      throw new UnprocessableEntityException('Erro ao cadastrar Lista de Presenca!');
    }
  }

  findAll() {
    return this.listaPresencaRepository.find();
  }

  findOne(id: number) {
    return this.listaPresencaRepository.findOne({where:{id:id}});
  }

  update(id: number, updateListaPresencaDto: UpdateListaPresencaDto) {
    return `This action updates a #${id} listaPresenca`;
  }

  remove(id: number) {
    return `This action removes a #${id} listaPresenca`;
  }
}
