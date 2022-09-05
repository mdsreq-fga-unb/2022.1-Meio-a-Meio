import { AlunoService } from './aluno.service';
import { CreateAlunoDto} from './dto/aluno.create.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly service: AlunoService) {}

  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.service.create(createAlunoDto);
  }

  @Get()
  async findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    return this.service.findOne(+id);
  }
}