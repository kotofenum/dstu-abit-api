import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { MajorsResolver } from "./majors.resolver";
import { MajorsService } from "./majors.service";
import { MajorEntity } from "./entities/major.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([MajorEntity]), AuthModule],
  providers: [MajorsResolver, MajorsService, AuthGuard],
  exports: [MajorsService, AuthGuard],
})
export class MajorsModule {}
