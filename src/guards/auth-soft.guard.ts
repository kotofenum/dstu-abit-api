import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthService } from "src/modules/auth/auth.service";
import { UsersService } from "src/modules/users/users.service";

@Injectable()
export class AuthSoftGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = this.getRequest(context);
    const authHeader = req.headers.authorization as string;

    const [type, token] = authHeader.split(" ");
    try {
      const { isValid, user } = await this.authService.validateToken(token);
      console.log(isValid, user);
      // const isValid = true;
      // const user = await this.usersService.getUsers()[0]
      // console.log(token, isValid, user)
      
      req.user = user;
      return true;
    } catch (err) {
      return true
    }
  }
}
