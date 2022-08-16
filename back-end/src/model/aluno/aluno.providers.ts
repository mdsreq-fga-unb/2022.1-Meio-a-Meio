import { DataSource } from 'typeorm';
import { Aluno } from './aluno.entity';

export const alunoProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Aluno),
    inject: ['DATA_SOURCE'], //vem do database.providers
  },
];
