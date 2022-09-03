import { Administrador } from './administrador.entity';
import { DataSource } from 'typeorm';

export const administradorProviders = [
  {
    provide: 'ADMINISTRADOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Administrador),
    inject: ['DATA_SOURCE'],
  },
];