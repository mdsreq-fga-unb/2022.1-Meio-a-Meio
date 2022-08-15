import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinaService } from './disciplina.service';

describe('DisciplinaService', () => {
  let service: DisciplinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplinaService],
    }).compile();

    service = module.get<DisciplinaService>(DisciplinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
