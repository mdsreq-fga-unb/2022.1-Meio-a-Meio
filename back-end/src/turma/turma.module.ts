import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { DatabaseModule } from '../database/database.module';
import { turmaProviders } from './turma.providers';
import { AlunoService } from '../aluno/aluno.service';
import { alunoProviders } from '../aluno/aluno.providers';
import { AlunoModule } from '../aluno/aluno.module';
import { enderecoProviders } from '../endereco/endereco.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TurmaController],
  providers: [...turmaProviders, ...alunoProviders, ...enderecoProviders, TurmaService, AlunoService],
  exports: [TurmaService],
})
export class TurmaModule {}
