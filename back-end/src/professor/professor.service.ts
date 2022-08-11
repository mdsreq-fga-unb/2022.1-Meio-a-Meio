import { CreateProfessorDto } from './dto/create-professor.dto';
import { validate } from 'class-validator';
import { Injectable, Inject } from '@nestjs/common';
import { Professor } from './professor.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProfessorService {
  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(createProfessorDto: CreateProfessorDto) {

    let professorDto = new CreateProfessorDto();
    professorDto.nome = createProfessorDto.nome;
    professorDto.cpf = createProfessorDto.cpf;
    professorDto.dataNascimento = new Date(createProfessorDto.dataNascimento);
    professorDto.formacaoPrimaria = createProfessorDto.formacaoPrimaria;
    professorDto.formacaoSegundaria = createProfessorDto.formacaoSegundaria;
    professorDto.observacao = createProfessorDto.observacao;

    const errors = await validate(professorDto)
    if (errors.length > 0) {
      //Detalhar erro
      throw new Error(`Validation failed!`)
      
    } else {

      if((await this.findByCPF(professorDto.cpf)).length > 0){
        return 'CPF duplicado'
      }
      await this.professorRepository.save(professorDto)
      .then(()=>{
        console.log("Cadastro")
        return 'Professor cadastrado!';
      })
      .catch(()=>{
        return 'Erro ao cadastrar professor';
      })

    }
  }

  async findByCPF(cpf: string){
    const x = this.professorRepository.find({
      where: {
        cpf: cpf
      }
    });
    
    return x;
  }

}

