import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SubjectController } from './subject.controller';
import { subjectProviders } from './subject.providers';
import { SubjectService } from './subject.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectController],
  providers: [...subjectProviders, SubjectService],
})
export class SubjectModule {}
