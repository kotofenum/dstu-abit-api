import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ProgramsResolver } from "./programs.resolver";
import { ProgramsService } from "./programs.service";
import { ProgramEntity } from "./entities/program.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { SpecialtiesModule } from "../specialties/specialties.module";
import { MajorsModule } from "../majors/majors.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProgramEntity]),
    AuthModule,
    SpecialtiesModule,
  ],
  providers: [ProgramsResolver, ProgramsService, AuthGuard],
  exports: [ProgramsService, AuthGuard],
})
export class ProgramsModule {}
