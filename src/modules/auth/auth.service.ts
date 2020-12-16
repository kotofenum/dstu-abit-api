import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { UserEntity } from "../users/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByPhone(username);
    console.log(username, pass, user);
    if (user && pass && user.pwd !== null && user.pwd === pass) {
      const { pwd, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.phone, sub: user.uid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(
    token: string
  ): Promise<{ isValid: boolean; user?: UserEntity }> {
    try {
      const res = this.jwtService.verify(token);

      const user = await this.usersService.getUserById(res["sub"]);

      return { user, isValid: true };
    } catch (e) {
      console.log(e);
      return { isValid: false };
    }
  }
}
