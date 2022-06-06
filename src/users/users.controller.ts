import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './Dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  createUser(@Body(new ValidationPipe()) body: CreateUserDto) {
    this.usersService.createUser(body);
  }
}
