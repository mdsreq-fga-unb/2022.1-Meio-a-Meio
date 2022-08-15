import { ProfessorService } from './professor.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('Articles', () => {
  let provider: ProfessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessorService],
    }).compile();

    provider = module.get<ProfessorService>(ProfessorService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});