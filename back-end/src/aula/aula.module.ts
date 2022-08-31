import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { aulaProviders } from './aula.providers';
import { DatabaseModule } from 'src/database/database.module';
import { TurmaModule } from 'src/turma/turma.module';
import { turmaProviders } from 'src/turma/turma.providers';
import { TurmaService } from 'src/turma/turma.service';
import { Turma } from 'src/turma/entities/turma.entity';

@Module({
  imports: [DatabaseModule, TurmaModule],
  controllers: [AulaController],
  providers: [...aulaProviders, AulaService, ...turmaProviders, Turma]
})
export class AulaModule {}
