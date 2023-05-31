import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { Channel } from './entities/channel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ChannelsController],
  imports: [TypeOrmModule.forFeature([Channel])],
  providers: [ChannelsService]
})
export class ChannelsModule {}
