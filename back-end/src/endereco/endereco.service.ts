import { Endereco } from './endereco.entity';
import { UpdateEnderecoDto } from './dto/endereco.update';
import { Injectable, Inject, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecoService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(data: UpdateEnderecoDto) {
    try {
      const endereco = new Endereco();

      endereco.aluno_id = data.aluno_id;
      endereco.CEP = data.CEP;
      endereco.numero = data.numero;
      endereco.bairro = data.bairro;
      endereco.cidade = data.cidade;
      endereco.complemento = data.complemento;
      endereco.endereco_residencial = data.endereco_residencial;
      endereco.estado = data.estado;

      return this.enderecoRepository.save(endereco);
    } catch(error) {
        throw new UnprocessableEntityException('Erro ao cadastrar endereço!');
    };
  }

  async findAll() {
    return await this.enderecoRepository.find();
  }

  async findEnderecoById(id: number) {
    const endereco = await this.enderecoRepository.findOneBy({ id });
    if(!endereco) {
      throw new NotFoundException("Endereço inválido!");
    }
    return endereco;
  }
  
  async update(id: number, data: UpdateEnderecoDto) {
    const endereco = await this.findEnderecoById(id);
    if(!endereco) 
      throw new NotFoundException("Endereço não encontrado!")

    try {
        endereco.CEP = data.CEP;
        endereco.numero = data.numero;
        endereco.bairro = data.bairro;
        endereco.cidade = data.cidade;
        endereco.complemento = data.complemento;
        endereco.endereco_residencial = data.endereco_residencial;
        endereco.estado = data.estado;

        return this.enderecoRepository.save(endereco);
    } catch(error) {
        throw new UnprocessableEntityException('Erro ao editar endereço!');
    };
  }
}