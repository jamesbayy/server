import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {

    @ApiProperty()
    username:string;
    @ApiProperty()
    password:string;
    @ApiProperty()
    nickname:string;
    @ApiProperty()
    phoneNum:string;
    @ApiProperty()
    confirmPassword:string;
}
export class UserLoginDto {
    @ApiProperty()
    username:string;
    @ApiProperty()
    password:string;
}

export class GetUserinfoDto{
    @ApiProperty()
    id:number;
    @ApiProperty()
    username:string;
    @ApiProperty()
    nickname:string;
    @ApiProperty()
    avatar:string;
}


