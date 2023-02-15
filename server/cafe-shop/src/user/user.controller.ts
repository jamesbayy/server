import { Controller, Get, Post, Body, Patch, Param, Delete,HttpCode,Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto,UserLoginDto,GetUserinfoDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger/dist';
import { GetUserInfo } from './entities/user.entity';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    ) {}

  @Post('register')
  @ApiOperation({
    summary:'注册'
  })
  @HttpCode(200)
    async create(@Body() params: CreateUserDto):Promise<object> {
    const data = await this.userService.userRegister(params);
    return data  
  }

  @Post('login')
  @ApiOperation({
    summary:'登录'
  })
  @HttpCode(200)
  async login(@Body() params:UserLoginDto ,@Req() req ):Promise<object>{
    const payload = {username:req.user.username,sub:req.user.id,permissions:req.user.permissions}
    const token =this.jwtService.sign(payload)
    const user = req.user
    user.token = token
    return user
  }

  @Post('getUserInfo')
  @ApiOperation({
    summary:'获取用户信息'
  })
  @HttpCode(200)
  @ApiBearerAuth()
  async getUserInfo(@Body() params,@Req() req):Promise<GetUserInfo>{
      return req.user


  }

}
