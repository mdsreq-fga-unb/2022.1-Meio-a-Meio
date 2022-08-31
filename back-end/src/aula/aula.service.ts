import { Injectable } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';

@Injectable()
export class AulaService {
  create(createAulaDto: CreateAulaDto) {
    return 'This action adds a new aula';
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
