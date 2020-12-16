import { UserEntity } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserInput } from "./inputs/user.input";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { passportJwtSecret } from "jwks-rsa";
var jwt = require("jsonwebtoken");

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
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
