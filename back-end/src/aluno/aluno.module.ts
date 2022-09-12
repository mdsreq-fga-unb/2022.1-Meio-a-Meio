import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AlunoController } from './aluno.controller';
import { alunoProviders } from './aluno.providers';
import { AlunoService } from './aluno.service';
import { atividadeProviders } from '../atividade/atividade.providers';
import { cursoProviders } from './../curso/curso.providers';
import { EnderecoModule } from './../endereco/endereco.module';

@Module({
  imports: [DatabaseModule, EnderecoModule],
  controllers: [AlunoController],
  providers: [...alunoProviders, ...cursoProviders, ...atividadeProviders, AlunoService],
  exports: [AlunoService]
})
export class AlunoModule {}
