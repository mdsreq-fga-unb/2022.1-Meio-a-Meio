import { DataSource } from 'typeorm';
import { Curso_Aluno } from './curso-aluno.entity';

export const cursoAlunoProviders = [
  {
    provide: 'CURSO_ALUNO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Curso_Aluno),
    inject: ['DATA_SOURCE'], 
  },
];
