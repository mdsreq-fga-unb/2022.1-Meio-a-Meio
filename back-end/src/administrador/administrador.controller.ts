import { CreateAdmDto } from './dto/administrador.create.dto';
import { AdministradorService } from './administrador.service';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { Administrador } from './administrador.entity';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly service: AdministradorService) {}

  @Post()
  async create(@Body() data: CreateAdmDto) {
    return this.service.create(data);
  }

  @Get()
  async findAll(): Promise<Administrador[]> {
    return this.service.findAll();
  }

  @Get('id')
  async findOne(@Param('id') id: number) {
    return this.service.findAdmById(id);
  }
}