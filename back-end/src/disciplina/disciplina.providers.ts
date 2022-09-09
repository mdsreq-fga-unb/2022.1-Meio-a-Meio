import { DataSource } from 'typeorm';
import { Disciplina } from './disciplina.entity';

export const disciplinaProviders = [
  {
    provide: 'DISCIPLINA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Disciplina),
    inject: ['DATA_SOURCE'], //vem do database.providers
  },
];
