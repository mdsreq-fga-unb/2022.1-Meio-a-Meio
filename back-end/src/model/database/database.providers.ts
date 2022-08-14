import { Professor } from 'src/professor/professor.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '781781',
        database: 'meioameio',
        entities: [Professor],
        synchronize: true, 
      });

      return dataSource.initialize();
    },
  },
];
