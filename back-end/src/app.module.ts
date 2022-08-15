import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entitys/user.entity';
import { ProfessorModule } from './professor/professor.module';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [StudentModule, ProfessorModule, SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
