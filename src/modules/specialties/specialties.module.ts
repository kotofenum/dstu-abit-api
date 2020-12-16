import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { SpecialtiesResolver } from "./specialties.resolver";
import { SpecialtiesService } from "./specialties.service";
import { SpecialtyEntity } from "./entities/specialty.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { MajorsService } from "../majors/majors.service";
import { MajorsModule } from "../majors/majors.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([SpecialtyEntity]),
    MajorsModule,
    AuthModule,
  ],
  providers: [SpecialtiesResolver, SpecialtiesService, AuthGuard],
  exports: [SpecialtiesService, AuthGuard],
})
export class SpecialtiesModule {}
