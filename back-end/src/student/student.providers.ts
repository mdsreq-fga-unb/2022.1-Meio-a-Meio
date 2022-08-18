import { DataSource } from 'typeorm';
import { Aluno } from './aluno.entity';

export const alunoProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
<<<<<<< HEAD:back-end/src/model/student/aluno.providers.ts
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Aluno),
    inject: ['DATA_SOURCE'], //vem do database.providers
=======
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Student),
    inject: ['DATA_SOURCE'],
>>>>>>> a49e8f09c5617ef9bd017736995f41635916431a:back-end/src/student/student.providers.ts
  },
];
