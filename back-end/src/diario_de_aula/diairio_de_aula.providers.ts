import { DiarioDeAula } from './diario_de_aula.entity';
import { DataSource } from 'typeorm';

export const diarioDeAulaProviders = [
  {
    provide: 'DIARIO_DE_AULA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DiarioDeAula),
    inject: ['DATA_SOURCE'], 
  },
];