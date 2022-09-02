import { Injectable,Inject, UnprocessableEntityException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateListaPresencaDto } from './dto/create-listaPresenca.dto';
import { UpdateListaPresencaDto } from './dto/update-listaPresenca.dto';
import { ListaPresenca } from './entities/listaPresenca.entity';
import { Repository } from 'typeorm';
import { Turma } from 'src/turma/entities/turma.entity';
import { TurmaService } from 'src/turma/turma.service';

@Injectable()
export class ListaPresencaService {
  constructor(
    @Inject('LISTAPRESENCA_REPOSITORY')
    private listaPresencaRepository: Repository<ListaPresenca>,
    
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>
    ){}

  async create(createListaPresencaDto: CreateListaPresencaDto) {

    const turma = await this.turmaRepository.findOne({where:{id:createListaPresencaDto.turma.id}})
    if(!turma){
      throw new UnprocessableEntityException('Erro ao cadastrar lista de presença!, Turma informada não existe');
    }

    const listaPresenca = new ListaPresenca();

    try{

      listaPresenca.data = new Date(createListaPresencaDto.data);
      listaPresenca.turma = createListaPresencaDto.turma;
      await this.listaPresencaRepository.save(listaPresenca);
      return listaPresenca;

    } catch(error){
      console.log(error)
      throw new UnprocessableEntityException('Erro ao cadastrar Lista de Presenca!');
    }
  }

  findAll() {
    return `This action returns all aula`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aula`;
  }

  update(id: number, updateAulaDto: UpdateListaPresencaDto) {
    return `This action updates a #${id} aula`;
  }

  remove(id: number) {
    return `This action removes a #${id} aula`;
  }
}
