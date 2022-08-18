import { DataSource } from 'typeorm';
import { Student } from './student.entity';

export const studentProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Student),
    inject: ['DATA_SOURCE'],
  },
];
