import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDTO } from '../model/dto/result.dto';
import { CreateSubjectDTO } from './dto/subject.create.dto';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @Inject('SUBJECT_REPOSITORY')
    private subjectRepository: Repository<Subject>,
  ) {}
  
  async create(data: CreateSubjectDTO): Promise<ResultDTO> {
    const disciplina = new Subject();

    disciplina.curricularComponent = data.curricularComponent;
    disciplina.especialization = data.especialization;
    disciplina.cargaHoraria = data.cargaHoraria;
    disciplina.ementa = data.ementa;
    disciplina.modalidade = data.modalidade;
    disciplina.unidadeResponsavel = data.unidadeResponsavel;

    return this.subjectRepository

      .save(disciplina)
      .then(() => {
        return <ResultDTO>{
          status: true,
          message: 'Disciplina cadastradada com sucesso',
        };
      })
      .catch(() => {
        return <ResultDTO>{
          status: false,
          message: 'Houve um erro ao cadastrar a Disciplina',
        };
      });
  }
}
