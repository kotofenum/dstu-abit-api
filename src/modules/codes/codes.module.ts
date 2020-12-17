import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpModule, Module } from "@nestjs/common";
import { CodesResolver } from "./codes.resolver";
import { CodesService } from "./codes.service";
import { CodeEntity } from "./entities/code.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { UserEntity } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([CodeEntity, UserEntity]),
    AuthModule,
    HttpModule.register({
      proxy: {
        host: "proxy.dstu.local",
        port: 3128,
        auth: {
          username: process.env.PROXY_USER,
          password: process.env.PROXY_PASS,
        },
      },
    }),
  ],
  providers: [CodesResolver, CodesService, AuthGuard, UsersService],
  exports: [CodesService, AuthGuard],
})
export class CodesModule {}
