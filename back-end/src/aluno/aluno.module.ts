import { cursoProviders } from './../curso/curso.providers';
import { CursoModule } from './../curso/curso.module';
import { EnderecoModule } from './../endereco/endereco.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AlunoController } from './aluno.controller';
import { alunoProviders } from './aluno.providers';
import { AlunoService } from './aluno.service';
import { Endereco } from 'src/endereco/endereco.entity';
import { enderecoProviders } from 'src/endereco/endereco.providers';

@Module({
  imports: [DatabaseModule, EnderecoModule],
  controllers: [AlunoController],
  providers: [...alunoProviders, ...cursoProviders, AlunoService],
  exports: [AlunoService]
})
export class AlunoModule {}
