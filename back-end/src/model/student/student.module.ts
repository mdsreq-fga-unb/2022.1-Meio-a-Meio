import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StudentController } from './student.controller';
import { studentProviders } from './student.providers';
import { StudentService } from './student.service';
@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [...studentProviders, StudentService],
})
export class StudentModule {}
