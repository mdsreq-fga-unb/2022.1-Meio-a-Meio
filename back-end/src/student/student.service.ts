import { Student } from './student.entity';
import { CreateStudentDto } from './dto/student.create.dto';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async create(data: CreateStudentDto) {

    try {
      const student = new Student();
      const generator = new RegisterGenerator();
      let amount = (await this.studentRepository.count()).valueOf();

      student.matricula = generator.matriculaGenerator(amount, 5);
      student.nomeCompleto = data.nomeCompleto;
      student.cpf = data.cpf;
      student.dataDeNascimento = data.cpf;
      student.nacionalidade = data.nacionalidade;
      student.rgORrne = data.rgORrne;
      student.UFrgORrne = data.UFrgORrne;
      student.orgaoEmissor = data.orgaoEmissor;
      student.ddd = data.ddd;
      student.celular = data.celular;
      student.especializacao = data.especializacao;
      student.sexo = data.sexo;
      student.enderecoResidencial = data.enderecoResidencial;
      student.bairro = data.bairro;
      student.cidade = data.cidade;
      student.statusEndereco = data.statusEndereco;
    
      return this.studentRepository.save(student);
    } catch(error) {
      throw new HttpException('Erro ao cadastrar aluno!', HttpStatus.BAD_REQUEST);
    }
  }
}
