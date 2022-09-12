import { CreateAdmDto } from './dto/administrador.create.dto';
import { Administrador } from './administrador.entity';
import { RegisterGenerator } from '../util/register.generator';
import { Injectable, Inject, BadRequestException, UnprocessableEntityException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { isCPF } from "brazilian-values";
import * as bcrypt from 'bcrypt';

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
        if((await this.findByEmail(data.email))) {
            throw new BadRequestException('Email já cadastrado! Verifique os dados e tente novamente.');
        }

        const adm = new Administrador();

        if (data.matricula == null) {
            const generator = new RegisterGenerator();
            let amount = (await this.administradorRepository.count()).valueOf();
            adm.matricula = generator.matriculaGenerator(amount, 2);
        }
        else if (await this.findByMatricula(data.matricula)) {
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
            adm.password = bcrypt.hashSync(data.password, 8);

            return this.administradorRepository.save(adm);
        } catch (error) {
            throw new UnprocessableEntityException('Erro ao cadastrar administrador!');
        }
    }

    async findAll() {
        const allUsers =  await this.administradorRepository.find();
        const allPasswordlessUsers = [];
        allUsers.forEach((adm) => {
            const { password, ...result } = adm;
            allPasswordlessUsers.push(result);
        })
        return allPasswordlessUsers;
    }

    async findAdmById(id: number) {
        const adm = await this.administradorRepository.findOneBy({ id });
        if (!adm) {
            throw new NotFoundException("Administrador inválido");
        }
        const { password, ...result } = adm;
        return result;
    }

    async findByEmail(email: string): Promise<Administrador | undefined> {
        return await this.administradorRepository.findOneBy({ email });
    }

    async findByMatricula(matricula: string) {
        return await this.administradorRepository.findOneBy({ matricula });
    }

    async validateIfCPFAlreadyExists(cpf: string) {
        return await this.administradorRepository.findOneBy({ cpf });
    }
}