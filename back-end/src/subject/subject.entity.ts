import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  curricularComponent: string;

  @Column({ length: 100 })
  especialization: string;

  @Column()
  cargaHoraria: number;

  @Column({ length: 255 })
  ementa: string;

  @Column({ length: 100 })
  modalidade: string;

  @Column({ length: 100 })
  unidadeResponsavel: string;
}
