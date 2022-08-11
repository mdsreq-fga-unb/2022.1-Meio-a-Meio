import { DataSource } from 'typeorm';
import { Professor } from './professor.entity';


export const professroProviders = [
  {
    provide: 'PROFESSOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Professor),
    inject: ['DATA_SOURCE'], //vem do database.providers
  },
];