import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column()
    username:string;
    @Column()
    userPhoneNum:string;
    @Column()
    UserAddress:string;
    @Column()
    password:string
    @Column()
    flavor:string;
    @CreateDateColumn()
    createTime:Date;
    @CreateDateColumn()
    updateTimeTime:Date;
}
@Entity()
export class GetUserInfo extends User{
    username: string;
    flavor: string;
    userPhoneNum: string;
    UserAddress: string;
}
