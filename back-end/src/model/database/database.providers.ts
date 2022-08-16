//import { Professor } from 'src/professor/professor.entity';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { Turma } from 'src/turma/entities/turma.entity';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //toda vez que rodar a aplicação, o nest vai tentar sincronizar o db com as classes
      });

      return dataSource.initialize();
    },
  },
];
