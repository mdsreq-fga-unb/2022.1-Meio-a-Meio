import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorModule } from './professor/professor.module';
import { StudentModule } from './aluno/aluno.module';
import { SubjectModule } from './subject/subject.module';
import { TurmaModule } from './turma/turma.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [StudentModule, ProfessorModule, SubjectModule, TurmaModule, DisciplinaModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}