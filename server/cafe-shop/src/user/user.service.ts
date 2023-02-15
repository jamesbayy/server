import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CustomException } from '../common/utils/customExp';
var md5 = require('md5');
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async userRegister({ username, password }): Promise<any> {
    const pwd = md5(password)
    const oldUser = await this.userRepository.exist(username)
    if (oldUser) {
      throw new BadRequestException("用户已存在");

    } else {
      const newUser = new User()
      newUser.username = username
      newUser.password = pwd
      return await this.userRepository.save(newUser).then(() => {
        return "添加成功"
      }).catch((err) => {
        return err
      })
    }
  }

  async uploadUserInfo(params, userId): Promise<any> {
    const uploadInfo = {
      flavor: params.flavor,
      username: params.username,
      avatar: params.avatar
    }
    return await this.userRepository.update(userId, uploadInfo).then(() => {
      return '操作成功'
    }).catch(() => {
      throw new CustomException("添加失败")
    })
  }
}
