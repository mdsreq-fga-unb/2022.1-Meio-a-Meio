import { ProfessorModule } from './professor/professor.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entitys/user.entity';
import { AlunoModule } from './model/aluno/aluno.module';

@Module({
  imports: [AlunoModule, ProfessorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
