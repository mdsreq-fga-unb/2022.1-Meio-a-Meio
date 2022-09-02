import { DataSource } from 'typeorm';
import { AtividadeAluno } from './atividade_aluno.entity';

export const atividadeAlunoProviders = [
  {
    provide: 'ATIVIDADE_ALUNO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AtividadeAluno),
    inject: ['DATA_SOURCE'], 
  },
];