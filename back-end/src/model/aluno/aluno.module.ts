import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dto/database.module';
import { AlunoController } from './aluno.controller';
import { alunoProviders } from './aluno.providers';
import { AlunoService } from './aluno.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AlunoController],
  providers: [...alunoProviders, AlunoService],
})
export class AlunoModule {}
