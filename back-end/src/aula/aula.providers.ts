import { DataSource } from 'typeorm';
import { Aula } from './entities/aula.entity';

export const aulaProviders = [
  {
    provide: 'AULA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Aula),
    inject: ['DATA_SOURCE'],
  },
];
