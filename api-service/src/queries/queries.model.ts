import {
  Column,
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

@Table({ underscored: true })
export class Query extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  date: Date;

  @Column
  name: string;

  @Column
  symbol: string;

  @Column
  open: number;

  @Column
  high: number;

  @Column
  low: number;

  @Column
  close: number;

  @Column
  volume: number;

  @ForeignKey(() => User)
  @Column
  userId: number;
}
