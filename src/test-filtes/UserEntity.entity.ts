import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import {
  Login,
  Password,
} from '@unistory/nestjs-auth/lib/misc/decorators/credentials.decorator';
import { User } from '@unistory/nestjs-auth/lib/misc/decorators/user.decorator';

// Require @User, @Login and @Password decorators
// By default package supply login endpoints which always use LOGIN and PASSWORD fields
// For authorization

// To properly checks fields from DTO and Entity we use decorators

// @User decorator require to get access to users table

// Each decorator can take single param "name"
// For reason where column/table names in DB sets manually

@User()
@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Login()
  @Column()
  email: string;

  // Password in database should store as hash via bcrypt lib

  @Password()
  @Column()
  password: string;

  @Column({ nullable: true })
  role: string;

  @Column({ nullable: true })
  dataOne: string;

  @Column({ nullable: true })
  dataTwo: string;

  @Column({ nullable: true })
  dataThree: string;
}
