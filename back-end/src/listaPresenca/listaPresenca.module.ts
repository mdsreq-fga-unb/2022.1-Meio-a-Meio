import { Module } from '@nestjs/common';
import { ListaPresencaService } from './listaPresenca.service';
import { ListaPresencaController } from './listaPresenca.controller';
import { listaPresencaProviders } from './listaPresenca.providers';
import { DatabaseModule } from '../database/database.module';
import { TurmaModule } from '../turma/turma.module';
import { turmaProviders } from '../turma/turma.providers';
import { TurmaService } from '../turma/turma.service';
import { Turma } from '../turma/turma.entity';

@Module({
  imports: [DatabaseModule, TurmaModule],
  controllers: [ListaPresencaController],
  providers: [...listaPresencaProviders, ListaPresencaService, ...turmaProviders, Turma]
})
export class ListaPresencaModule {}
