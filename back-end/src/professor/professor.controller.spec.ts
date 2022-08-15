import { ProfessorService } from './professor.service';
import { professorProviders } from './professor.providers';
import { ProfessorController } from './professor.controller';
import { Test, TestingModule } from '@nestjs/testing';  

describe('ProfessorController', () => {
    let controller: ProfessorController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [ProfessorController],
      }).compile();
  
      controller = module.get<ProfessorController>(ProfessorController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});