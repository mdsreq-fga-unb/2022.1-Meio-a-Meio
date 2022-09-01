import { DataSource } from 'typeorm';
import { Curso } from './curso.entity';

export const cursoProviders = [
  {
    provide: 'CURSO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Curso),
    inject: ['DATA_SOURCE'], 
  },
];