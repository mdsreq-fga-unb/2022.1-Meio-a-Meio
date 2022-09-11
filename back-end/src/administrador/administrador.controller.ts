import { Body, Controller, Post, Get, Param, UseGuards, Request } from '@nestjs/common';
import { CreateAdmDto } from './dto/administrador.create.dto';
import { Administrador } from './administrador.entity';
import { AdministradorService } from './administrador.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { SkipAuth } from '../auth/public-key.decorator';

@Controller('administrador')
export class AdministradorController {
  constructor(
    private readonly service: AdministradorService,
    private authService: AuthService
  ) {}

  @SkipAuth()
  @Post()
  async create(@Body() data: CreateAdmDto) {
    return this.service.create(data);
  }

  @SkipAuth()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {    
    return this.authService.login(req.user);
  }

  @Get()
  async findAll(): Promise<Administrador[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.service.findAdmById(id);
  }
}