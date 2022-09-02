import { Test, TestingModule } from '@nestjs/testing';
import { AulaController } from './listaPresenca.controller';
import { AulaService } from './listaPresenca.service';

describe('ListaPresencaController', () => {
  let controller: ListaPresencaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AulaController],
      providers: [AulaService],
    }).compile();

    controller = module.get<AulaController>(AulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
