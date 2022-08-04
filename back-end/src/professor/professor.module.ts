import { ProfessorController } from './controller/professor.controller';
import { Module } from "@nestjs/common";
import { ProfessorService } from './service/professor.service';

@Module({
    controllers: [ProfessorController],
    providers: [ProfessorService],
})
export class ProfessorModule {}