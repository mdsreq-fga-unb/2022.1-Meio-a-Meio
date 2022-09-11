import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ListaPresencaService } from './listaPresenca.service';
import { CreateListaPresencaDto } from './dto/create-listaPresenca.dto';
import { UpdateListaPresencaDto } from './dto/update-listaPresenca.dto';

@Controller('listaPresenca')
export class ListaPresencaController {
  constructor(private readonly listaPresencaService: ListaPresencaService) {}

  @Post()
  create(@Body() createListaPresencaDto: CreateListaPresencaDto) {
    return this.listaPresencaService.create(createListaPresencaDto);
  }

  @Get()
  findAll() {
    return this.listaPresencaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaPresencaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateListaPresencaDto: UpdateListaPresencaDto) {
    return this.listaPresencaService.update(+id, updateListaPresencaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaPresencaService.remove(+id);
  }
}
