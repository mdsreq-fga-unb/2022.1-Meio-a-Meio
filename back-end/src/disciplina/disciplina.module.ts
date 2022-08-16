import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { DatabaseModule } from 'src/model/database/database.module';
import { disciplinaProviders } from './disciplina.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DisciplinaController],
  providers: [...disciplinaProviders,DisciplinaService]
})
export class DisciplinaModule {}
