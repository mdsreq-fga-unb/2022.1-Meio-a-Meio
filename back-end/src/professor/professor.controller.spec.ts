import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { Professor } from './professor.entity';
import { Test, TestingModule } from '@nestjs/testing';  
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProfessorController', () => {
    let controller: ProfessorController;
    let service: ProfessorService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [ProfessorController],
        providers: [
          ProfessorService,
          {
            provide: getRepositoryToken(Professor),
            useValue: {
              getAll: jest.fn().mockResolvedValue([
                { },
              ]),
            },
          }
        ],
      }).compile();
  
      controller = module.get<ProfessorController>(ProfessorController);
      service = module.get<ProfessorService>(ProfessorService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});