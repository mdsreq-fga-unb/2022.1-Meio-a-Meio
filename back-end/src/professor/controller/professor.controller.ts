import { Professor } from '../entity/professor.entity';
import { CreateProfessorDto } from '../dto/create.professor.dto';
import { ProfessorService } from '../service/professor.service'; 
import { Body, Controller, Post } from '@nestjs/common';

@Controller("professor")
export class ProfessorController {

    constructor(private readonly professorService : ProfessorService) {}
    
    @Post("/create")
    create(@Body() CreateProfessorDto:CreateProfessorDto) {
        return this.professorService.create(CreateProfessorDto);
    }
}
