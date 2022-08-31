import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Aluno } from 'src/aluno/aluno.entity';
import { Turma } from 'src/turma/entities/turma.entity';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { Professor } from 'src/professor/professor.entity';
import { Curso } from 'src/curso/curso.entity';
import { TurmaAluno } from 'src/turma/entities/turma-aluno';
import { Endereco } from 'src/endereco/endereco.entity';


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
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
