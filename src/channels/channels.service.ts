import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from './entities/channel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectRepository(Channel)
    private channelRepository: Repository<Channel>
  ){}
  

  async create(createChannelDto: CreateChannelDto) {
    return await this.channelRepository.save(createChannelDto);
  }

  async findAll() {
    return await this.channelRepository.find();
  }

  async findOne(id: string) {
    return await this.channelRepository.findOneBy({id});
  }

  async update(id: string, updateChannelDto: UpdateChannelDto) {
    return await this.channelRepository.update(id, updateChannelDto);
  }

  async remove(id: string) {
    return await this.channelRepository.delete(id);
  }
}
