import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpModule, Module } from "@nestjs/common";
import { PreuniversityRequestsResolver } from "./preuniversity-requests.resolver";
import { PreuniversityRequestsService } from "./preuniversity-requests.service";
import { PreuniversityRequestEntity } from "./entities/preuniversity-request.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { UserEntity } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
const proxy = {
  host: process.env.PROXY_HOST,
  port: 3128,
  auth: {
    username: process.env.PROXY_USER,
    password: process.env.PROXY_PASS,
  },
};
console.log(proxy);
@Module({
  imports: [
    TypeOrmModule.forFeature([PreuniversityRequestEntity, UserEntity]),
    AuthModule,
    HttpModule.register({
      proxy: proxy,
    }),
  ],
  providers: [PreuniversityRequestsResolver, PreuniversityRequestsService, AuthGuard, UsersService],
  exports: [PreuniversityRequestsService, AuthGuard],
})
export class PreuniversityRequestsModule {}
