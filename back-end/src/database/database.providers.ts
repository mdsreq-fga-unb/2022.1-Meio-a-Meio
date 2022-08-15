import { Professor } from 'src/professor/professor.entity';
import { Student } from 'src/student/student.entity';
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
        password: 'password',
        database: 'meioameio',
        entities: [Professor, Student],
        synchronize: true, 
      });

      return dataSource.initialize();
    },
  },
];
