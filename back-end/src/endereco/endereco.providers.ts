import { DataSource } from 'typeorm';
import { Endereco } from './endereco.entity';

export const enderecoProviders = [
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Endereco),
    inject: ['DATA_SOURCE'], 
  },
];