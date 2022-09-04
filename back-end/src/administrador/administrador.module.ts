import { AdministradorService } from './administrador.service';
import { administradorProviders } from './administrador.providers';
import { AdministradorController } from './administrador.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AdministradorController],
  providers: [...administradorProviders, AdministradorService]
})
export class AdministradorModule {}
