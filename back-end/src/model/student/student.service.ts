import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDTO } from '../dto/result.dto';
import { Student } from './student.entity';
import { CreateStudentDTO } from './dto/student.create.dto';

@Injectable()
export class StudentService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    //lista todos os alunos
    return this.studentRepository.find();
  }

  async create(data: CreateStudentDTO): Promise<ResultDTO> {
    const aluno = new Student();
    aluno.name = data.name;
    aluno.lastName = data.lastName;
    aluno.cpf = data.cpf;
    aluno.birthDate = data.birthDate;
    aluno.gender = data.gender;

    return this.studentRepository
      .save(aluno) //ele ja sabe que precisa fazer um insert
      .then(() => {
        return <ResultDTO>{
          status: true,
          message: 'Aluno cadastrado com sucesso',
        };
      })
      .catch(() => {
        return <ResultDTO>{
          status: false,
          message: 'Houve um erro ao cadastrar o aluno',
        };
      });
  }
}
