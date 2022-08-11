import { Test, TestingModule } from '@nestjs/testing';
import { TurmaController } from './turma.controller';
import { TurmaService } from './turma.service';

describe('TurmaController', () => {
  let controller: TurmaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurmaController],
      providers: [TurmaService],
    }).compile();

    controller = module.get<TurmaController>(TurmaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
