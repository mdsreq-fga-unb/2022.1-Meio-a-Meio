import { DiarioDeAulaService } from './diario_de_aula.service';
import { DiarioDeAulaController } from './diario_de_aula.controller';
import { TurmaModule } from './../turma/turma.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { diarioDeAulaProviders } from './diairio_de_aula.providers';

@Module({
  imports: [DatabaseModule, TurmaModule],
  controllers: [DiarioDeAulaController],
  providers: [...diarioDeAulaProviders, DiarioDeAulaService],
})
export class DiarioDeAulaModule {}