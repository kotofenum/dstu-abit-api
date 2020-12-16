import { UserEntity } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserInput } from "./inputs/user.input";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { passportJwtSecret } from "jwks-rsa";
import { CreateUserInput } from "./inputs/create-user.input";
import { CodesService } from "../codes/codes.service";
import { CodeEntity } from "../codes/entities/code.entity";
import { UpdateUserInput } from "./inputs/update-user.input";
var jwt = require("jsonwebtoken");

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity> // private readonly codesService: CodesService
  ) {}

  async createUser(data: UserInput): Promise<UserEntity> {
    return await this.usersRepository.save({
      oauthId: data.oauthId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      picture: data.picture,
    });
  }

  async updateUser(
    data: UpdateUserInput,
    user: UserEntity
  ): Promise<UserEntity> {
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.patronym = data.patronym;
    user.birthDate = data.birthDate;
    user.country = data.country;
    user.locality = data.locality;
    user.email = data.email;
    user.pwd = data.pwd;

    if (data.school) {
      user.school = data.school;
    }
    if (data.position) {
      user.position = data.position;
    }
    if (data.child) {
      user.child = data.child;
    }
    if (data.course) {
      user.course = data.course;
    }

    return await this.usersRepository.save(user);
  }

  async confirmUser(user: UserEntity): Promise<UserEntity> {
    user.phoneVerified = true
    
    return await this.usersRepository.save(user);
  }

  async upsertUser(data: CreateUserInput): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({
      where: { phone: data.phone },
    });

    if (!user) {
      const newUser = await this.usersRepository.save({
        phone: data.phone,
        type: data.type,
      });

      // return await this.codesService.createCode(
      //   {
      //     phone: newUser.phone,
      //   },
      //   newUser
      // );
      return newUser;
    } else {
      return user;
      // return await this.codesService.createCode({ phone: user.phone }, user);
    }
  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async getUserByPhone(phone: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({ where: { phone: phone } });
  }

  async getUserById(id: string): Promise<UserEntity> {
    return await this.usersRepository.findOne(id);
  }

  async validateToken(
    token: string
  ): Promise<{ isValid: boolean; user?: UserEntity }> {
    try {
      // const res = this.jwtService.verify(token);
      // const user = await this.usersRepository.findOne({
      //   oauthId: res["sub"],
      // });
      // return { user, isValid: true };
    } catch (e) {
      console.log(e);
      return { isValid: false };
    }
  }
}
