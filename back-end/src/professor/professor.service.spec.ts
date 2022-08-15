import { ProfessorService } from './professor.service';
import { Professor } from './professor.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProfessorProvider', () => {
  let service: ProfessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<ProfessorService>(ProfessorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});