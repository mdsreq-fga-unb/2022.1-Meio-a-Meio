import { CreateAdmDto } from './dto/administrador.create.dto';
import { AdministradorService } from './administrador.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly service: AdministradorService) {}

  @Post()
  async create(@Body() data: CreateAdmDto) {
    return this.service.create(data);
  }
}