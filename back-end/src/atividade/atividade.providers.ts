import { DataSource } from 'typeorm';
import { Atividade } from './atividade.entity';

export const atividadeProviders = [
  {
    provide: 'ATIVIDADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Atividade),
    inject: ['DATA_SOURCE'], 
  },
];