import { DataSource } from 'typeorm';
import { Professor } from './professor.entity';

export const professorProviders = [
  {
    provide: 'PROFESSOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Professor),
    inject: ['DATA_SOURCE'], 
  },
];
