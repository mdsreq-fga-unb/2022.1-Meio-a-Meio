import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { DatabaseModule } from '../model/database/database.module';
import { turmaProviders } from './turma.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TurmaController],
  providers: [...turmaProviders,TurmaService]
})
export class TurmaModule {}
