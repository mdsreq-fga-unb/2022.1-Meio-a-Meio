import { Module } from '@nestjs/common';
import { ListaPresencaService } from './listaPresenca.service';
import { ListaPresencaController } from './listaPresenca.controller';
import { listaPresencaProviders } from './listaPresenca.providers';
import { DatabaseModule } from 'src/database/database.module';
import { TurmaModule } from 'src/turma/turma.module';
import { turmaProviders } from 'src/turma/turma.providers';
import { TurmaService } from 'src/turma/turma.service';
import { Turma } from 'src/turma/entities/turma.entity';

@Module({
  imports: [DatabaseModule, TurmaModule],
  controllers: [ListaPresencaController],
  providers: [...listaPresencaProviders, ListaPresencaService, ...turmaProviders, Turma]
})
export class ListaPresencaModule {}
