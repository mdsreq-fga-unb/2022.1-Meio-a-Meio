import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { enderecoProviders } from './endereco.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...enderecoProviders],
  exports: [...enderecoProviders],
})
export class EnderecoModule {}