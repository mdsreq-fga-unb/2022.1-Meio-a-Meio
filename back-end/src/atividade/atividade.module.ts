import { AlunoModule } from 'src/aluno/aluno.module';
import { AtividadeController } from './atividade.controller';
import { AtividadeService } from './atividade.service';
import { atividadeAlunoProviders } from './../atividades_aluno/atividade_aluno.providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { atividadeProviders } from './atividade.providers';

@Module({
  imports: [DatabaseModule, AlunoModule],
  controllers: [AtividadeController],
  providers: [...atividadeProviders, ...atividadeAlunoProviders, AtividadeService],
  exports: [AtividadeService],
})
export class AtividadeModule {}