import { DataSource } from 'typeorm';
import { Turma } from './turma.entity';

export const turmaProviders = [
  {
    provide: 'TURMA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Turma),
    inject: ['DATA_SOURCE'], //vem do database.providers
  },
];
