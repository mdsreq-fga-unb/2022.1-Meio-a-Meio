import { Test, TestingModule } from '@nestjs/testing';
import { AulaService } from './aula.service';

describe('AulaService', () => {
  let service: AulaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AulaService],
    }).compile();

    service = module.get<AulaService>(AulaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
