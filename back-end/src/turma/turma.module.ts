import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { DatabaseModule } from '../database/database.module';
import { turmaProviders } from './turma.providers';
import { AlunoService } from 'src/aluno/aluno.service';
import { alunoProviders } from 'src/aluno/aluno.providers';
import { AlunoModule } from 'src/aluno/aluno.module';
import { enderecoProviders } from 'src/endereco/endereco.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TurmaController],
  providers: [...turmaProviders, ...alunoProviders, ...enderecoProviders, TurmaService, AlunoService,],
  exports: [TurmaService],
})
export class TurmaModule {}
