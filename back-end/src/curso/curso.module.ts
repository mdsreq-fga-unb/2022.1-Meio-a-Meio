import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CursoController } from './curso.controller';
import { CursoService } from './curso.service';
import { cursoProviders } from './curso.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CursoController],
  providers: [...cursoProviders, CursoService],
  exports: [CursoService],
})
export class CursoModule {}