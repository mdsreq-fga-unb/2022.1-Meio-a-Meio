import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorModule } from './model/professor/professor.module';
import { AlunoModule } from './model/student/aluno.module';
import { SubjectModule } from './model/subject/subject.module';

@Module({
  imports: [AlunoModule, ProfessorModule, SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
