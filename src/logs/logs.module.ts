import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';

@Module({
  controllers: [LogsController],
  imports:[TypeOrmModule.forFeature([Log])],
  providers: [LogsService]
})
export class LogsModule {}
