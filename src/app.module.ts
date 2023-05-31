import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/db/database.config';
import { config } from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelsModule } from './channels/channels.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    CategoriesModule, 
    UsersModule,
    ConfigModule.forRoot({
        isGlobal: true,
        load: [config]
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useClass: DatabaseConfig,
    }),
    ChannelsModule,
    LogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
