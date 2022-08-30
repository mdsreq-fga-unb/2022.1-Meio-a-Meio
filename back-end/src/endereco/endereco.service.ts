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

  async findEnderecoById(id: number) {
    return await this.enderecoRepository.findOneBy({ id });
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
        endereco.endereco_residencia = data.endereco_residencial;
        endereco.estado = data.estado;
        endereco.update_at = new Date();

        return this.enderecoRepository.save(endereco);
    } catch(error) {
        throw new UnprocessableEntityException('Erro ao editar endereço!');
    };
  }
}
