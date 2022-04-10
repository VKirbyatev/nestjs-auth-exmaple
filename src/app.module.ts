import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'unistory-nestjs-auth';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Payload } from './test-filtes/payload';
import { UserEntity } from './test-filtes/UserEntity.entity';

const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'Test',
  entities: [UserEntity],
  synchronize: true,
};

const tokensConfig = {
  access: {
    secret: 'some_secret',
    lifetime: '1d',
  },
  refresh: {
    secret: 'some_secret',
    lifetime: '1d',
  },
};

@Module({
  imports: [
    // Module should be provided projects root
    // Then its decorators and services will be available at all project

    // Provides three endpoints
    // You can check and try it via postman documentation
    // https://documenter.getpostman.com/view/16227981/UVyvwadn

    AuthModule.forRoot({
      // Required field
      databaseConfig: {
        typeORMconfig: pgConfig,
      },

      // Not required fields

      // // By default set in payload only user ID
      payload: Payload,

      // // By default uses this properties
      tokens: tokensConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
