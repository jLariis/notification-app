import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogsService {

  constructor(
    @InjectRepository(Log)
    private logRepository: Repository<Log>
  ){}

  async create(createLogDto: CreateLogDto) {
    return await this.logRepository.save(createLogDto);
  }

  async findAll() {
    return await this.logRepository.find({
      relations: ['category','channel','user']
    });
  }

  async findOne(id: string) {
    return await this.logRepository.findOneBy({id});
  }

  async findByUser(userId: string) {
    const result = await this.logRepository.createQueryBuilder('log')
    .innerJoinAndSelect('log.user', 'user')
    .where('user.id = :userId', { userId });

    return result;
  }

  async update(id: string, updateLogDto: UpdateLogDto) {
    return await this.logRepository.update(id, updateLogDto);
  }

  async remove(id: string) {
    return await this.logRepository.delete(id);
  }
}
