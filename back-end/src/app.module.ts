import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entitys/user.entity';
import { ProfessorModule } from './model/professor/professor.module';
import { StudentModule } from './model/student/student.module';
import { SubjectModule } from './model/subject/subject.module';
import { TurmaModule } from './turma/turma.module';
import { DisciplinaModule } from './disciplina/disciplina.module';


@Module({
  imports: [StudentModule, ProfessorModule, SubjectModule, TurmaModule, DisciplinaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
