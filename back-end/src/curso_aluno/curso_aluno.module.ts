import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { cursoAlunoProviders } from './curso-aluno.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...cursoAlunoProviders],
})
export class CursoAlunoModule {}