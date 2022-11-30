import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    let password = createUserDto.password;
    if (!password) {
      password = this.generatePass();
    }
    await this.userModel.create({ ...createUserDto, password });
    return { email: createUserDto.email, password };
  }

  generatePass() {
    return Math.random().toString(36).slice(-8);
  }

  findAll() {
    return this.userModel.findAll();
  }
}
