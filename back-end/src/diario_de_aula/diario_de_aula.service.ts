import { CreateDiarioDeAulaDto } from './dto/diario_de_aula.create.dto';
import { TurmaService } from './../turma/turma.service';
import { DiarioDeAula } from './diario_de_aula.entity';
import { Injectable, Inject, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class DiarioDeAulaService {
  constructor(
    @Inject('DIARIO_DE_AULA_REPOSITORY')
    private diarioRepository: Repository<DiarioDeAula>,

    private readonly turmaService: TurmaService
  ) {}

  async create(turma_id: number, data: CreateDiarioDeAulaDto) {
    const turma = await this.turmaService.findOne(turma_id);
    if(!turma) {
      throw new BadRequestException('Turma inválida!');
    }

    try {
        const diario = new DiarioDeAula();
        diario.conteudo = data.conteudo;
        diario.data = new Date(data.data);
        diario.observacao = data.observacao;

        return this.diarioRepository.save(diario);
      } catch(error) {
        throw new UnprocessableEntityException('Erro ao registrar diário de aula');
      }
  }

  async findAll() {
    return this.diarioRepository.find();
  }
}