import { cursoProviders } from './../curso/curso.providers';
import { CursoModule } from './../curso/curso.module';
import { EnderecoModule } from './../endereco/endereco.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AlunoController } from './aluno.controller';
import { alunoProviders } from './aluno.providers';
import { AlunoService } from './aluno.service';

@Module({
  imports: [DatabaseModule, EnderecoModule, CursoModule],
  controllers: [AlunoController],
  providers: [...alunoProviders, ...cursoProviders, AlunoService],
})
export class StudentModule {}
