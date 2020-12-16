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

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTagEntity]),
    AuthModule,
    MajorsModule,
    SpecialtiesModule,
    ProgramsModule,
  ],
  providers: [UserTagsResolver, UserTagsService, AuthGuard],
  exports: [UserTagsService, AuthGuard],
})
export class UserTagsModule {}
