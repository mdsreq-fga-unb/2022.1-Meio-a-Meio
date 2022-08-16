import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinaController } from './disciplina.controller';
import { DisciplinaService } from './disciplina.service';

describe('DisciplinaController', () => {
  let controller: DisciplinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplinaController],
      providers: [DisciplinaService],
    }).compile();

    controller = module.get<DisciplinaController>(DisciplinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
