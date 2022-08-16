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
        password: '781781'DB_,
        database: 'meioameio',DB_
        entities: [__dirname +DB_ '/../**entity{.ts,.js}'],
        synchronize: true, //tDB_oda vez que rodar a aplicação, o nest vai tentar sincronizar o db com as classes
      });DB_

      return dataSource.initialize();
    },
  },
];
