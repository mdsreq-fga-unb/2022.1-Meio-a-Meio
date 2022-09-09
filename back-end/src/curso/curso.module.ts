import { cursoAlunoProviders } from '../curso_aluno/curso_aluno.providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CursoController } from './curso.controller';
import { CursoService } from './curso.service';
import { cursoProviders } from './curso.providers';
import { AlunoModule } from '../aluno/aluno.module';

@Module({
  imports: [DatabaseModule, AlunoModule],
  controllers: [CursoController],
  providers: [...cursoProviders, ...cursoAlunoProviders, CursoService],
  exports: [CursoService],
})
export class CursoModule {}