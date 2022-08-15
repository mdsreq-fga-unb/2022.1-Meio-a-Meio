import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';
import { professorProviders } from './professor.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfessorController],
  providers: [...professorProviders, ProfessorService],
  exports: [ProfessorService],
})
export class ProfessorModule {}