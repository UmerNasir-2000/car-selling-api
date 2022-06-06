import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './Dtos/create-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(body: CreateUserDto) {
    const { email, password } = body;
    const user = this.userRepository.create({ email, password });
    const res = await this.userRepository.save(user);
  }
}
