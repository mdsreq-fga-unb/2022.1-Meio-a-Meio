import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorModule } from './professor/professor.module';
import { AlunoModule } from './aluno/aluno.module';
import { TurmaModule } from './turma/turma.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { CursoModule } from './curso/curso.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ConfigModule } from '@nestjs/config';
import { ListaPresencaModule } from './listaPresenca/listaPresenca.module';

@Module({
  imports: [StudentModule, ProfessorModule, TurmaModule, DisciplinaModule, CursoModule, EnderecoModule, ConfigModule.forRoot({isGlobal: true}), ListaPresencaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}