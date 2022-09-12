import { AdministradorService } from './administrador.service';
import { administradorProviders } from './administrador.providers';
import { AdministradorController } from './administrador.controller';
import { AuthModule } from '../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [AdministradorController],
  providers: [...administradorProviders, AdministradorService],
  exports: [AdministradorService]
})
export class AdministradorModule {}