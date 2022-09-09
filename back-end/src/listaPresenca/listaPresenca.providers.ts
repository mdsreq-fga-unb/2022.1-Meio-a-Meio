import { DataSource } from 'typeorm';
import { ListaPresenca } from './listaPresenca.entity';

export const listaPresencaProviders = [
  {
    provide: 'LISTAPRESENCA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ListaPresenca),
    inject: ['DATA_SOURCE'],
  },
];
