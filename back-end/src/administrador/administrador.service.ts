import { CreateAdmDto } from './dto/administrador.create.dto';
import { Administrador } from './administrador.entity';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { isCPF } from "brazilian-values";

@Injectable()
export class AdministradorService {
    constructor(
        @Inject('ADMINISTRADOR_REPOSITORY')
        private administradorRepository: Repository<Administrador>
    ) { }

    async create(data: CreateAdmDto) {
        if (!isCPF(data.cpf)) {
            throw new BadRequestException('CPF inválido! Verifique e tente novamente.');
        }
        if ((await this.validateIfCPFAlreadyExists(data.cpf))) {
            throw new BadRequestException('CPF já cadastrado! Verifique os dados e tente novamente.');
        }

        const adm = new Administrador();

        if (data.matricula == null) {
            const generator = new RegisterGenerator();
            let amount = (await this.administradorRepository.count()).valueOf();
            adm.matricula = generator.matriculaGenerator(amount, 2);
        }
        else if (await this.validateIfMatriculaAlreadyExists(data.matricula)) {
            throw new BadRequestException('Matrícula já cadastrada! Verifique e tente novamente.');
        }
        else {
            adm.matricula = data.matricula;
        }

        try {
            adm.nome_completo = data.nome_completo;
            adm.sexo = data.sexo;
            adm.data_de_nascimento = new Date(data.data_de_nascimento);
            adm.nacionalidade = data.nacionalidade;
            adm.email = data.email;
            adm.cpf = data.cpf;
            adm.rg_rne = data.rg_rne;
            adm.uf_rg_rne = data.uf_rg_rne;
            adm.orgao_emissor = data.orgao_emissor;
            adm.celular = data.celular;

            return this.administradorRepository.save(adm);
        } catch (error) {
            throw new UnprocessableEntityException('Erro ao cadastrar administrador!');
        }
    }

    async validateIfCPFAlreadyExists(cpf: string) {
        return await this.administradorRepository.findOneBy({ cpf });
    }

    async validateIfMatriculaAlreadyExists(matricula: string) {
        return await this.administradorRepository.findOneBy({ matricula });
    }
}