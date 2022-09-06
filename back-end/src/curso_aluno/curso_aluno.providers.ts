import { DataSource } from 'typeorm';
import { CursoAluno } from './curso_aluno.entity';

export const cursoAlunoProviders = [
  {
    provide: 'CURSO_ALUNO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CursoAluno),
    inject: ['DATA_SOURCE'], 
  },
];
