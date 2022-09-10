import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { DatabaseModule } from '../database/database.module';
import { disciplinaProviders } from './disciplina.providers';
import { cursoProviders } from 'src/curso/curso.providers';
import { professorProviders } from 'src/professor/professor.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DisciplinaController],
  providers: [...disciplinaProviders,DisciplinaService, ...cursoProviders, ...professorProviders]
})
export class DisciplinaModule {}
