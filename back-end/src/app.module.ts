import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entitys/user.entity';
import { AlunoModule } from './model/aluno/aluno.module';

@Module({
  imports: [AlunoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
