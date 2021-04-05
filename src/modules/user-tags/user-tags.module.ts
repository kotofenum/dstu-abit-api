import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserTagsResolver } from "./user-tags.resolver";
import { UserTagsService } from "./user-tags.service";
import { UserTagEntity } from "./entities/user-tag.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";
import { MajorsModule } from "../majors/majors.module";
import { SpecialtiesModule } from "../specialties/specialties.module";
import { ProgramsModule } from "../programs/programs.module";
import { UsersService } from "../users/users.service";
import { UserEntity } from "../users/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTagEntity, UserEntity]),
    AuthModule,
    MajorsModule,
    SpecialtiesModule,
    ProgramsModule,
  ],
  providers: [UserTagsResolver, UserTagsService, UsersService, AuthGuard],
  exports: [UserTagsService, AuthGuard],
})
export class UserTagsModule {}
