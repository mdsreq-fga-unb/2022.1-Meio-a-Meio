import { ProfessorController } from './professor.controller';
import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { DatabaseModule } from '../model/database/database.module';
import { professroProviders } from './professor.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfessorController],
  providers: [...professroProviders,ProfessorService],
})
export class ProfessorModule {}
