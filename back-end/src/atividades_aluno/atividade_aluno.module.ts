import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { atividadeAlunoProviders } from './atividade_aluno.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...atividadeAlunoProviders],
})
export class AtividadeAlunoModule {}