import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthService } from "src/modules/auth/auth.service";
import { UsersService } from "src/modules/users/users.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = this.getRequest(context);
    const authHeader = req.headers.authorization as string;

    if (!authHeader) {
      throw new BadRequestException('Authorization header not found.');
    }
    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer') {
      throw new BadRequestException(`Authentication type \'Bearer\' required. Found \'${type}\'`);
    }
    const { isValid, user } = await this.authService.validateToken(token);
    console.log(isValid, user);
    // const isValid = true;
    // const user = await this.usersService.getUsers()[0]
// console.log(token, isValid, user)
    if (isValid && user.isAdmin) {
      req.user = user;
      return true;
    }
    throw new UnauthorizedException('Token not valid or not enough access rights');
  }
}