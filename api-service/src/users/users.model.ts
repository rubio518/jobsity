import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table({ underscored: true })
export class User extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  email: string;

  @Column
  role: string;

  @Column
  password: string;
}
