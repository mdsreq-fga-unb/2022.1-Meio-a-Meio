import { cursoProviders } from './../curso/curso.providers';
import { EnderecoModule } from './../endereco/endereco.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AlunoController } from './aluno.controller';
import { alunoProviders } from './aluno.providers';
import { AlunoService } from './aluno.service';
import { atividadeProviders } from 'src/atividade/atividade.providers';

@Module({
  imports: [DatabaseModule, EnderecoModule],
  controllers: [AlunoController],
  providers: [...alunoProviders, ...cursoProviders, ...atividadeProviders, AlunoService],
  exports: [AlunoService]
})
export class AlunoModule {}
