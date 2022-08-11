import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Turma } from './entities/turma.entity';

@Injectable()
export class TurmaService {
  constructor(
    @Inject('TURMA_REPOSITORY')
    private turmaRepository: Repository<Turma>,
  ){}

  create(createTurmaDto: CreateTurmaDto) {
    return 'This action adds a new turma';
  }

  async findAll(): Promise<Turma[]> {
    return this.turmaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} turma`;
  }

  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return `This action updates a #${id} turma`;
  }

  remove(id: number) {
    return `This action removes a #${id} turma`;
  }
}
