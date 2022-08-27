import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { DatabaseModule } from '../database/database.module';
import { turmaProviders } from './turma.providers';
import { AlunoService } from 'src/aluno/aluno.service';
import { alunoProviders } from 'src/aluno/aluno.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TurmaController],
  providers: [...turmaProviders, ...alunoProviders, TurmaService, AlunoService]
})
export class TurmaModule {}
