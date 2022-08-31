import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';

@Module({
  controllers: [AulaController],
  providers: [AulaService]
})
export class AulaModule {}
