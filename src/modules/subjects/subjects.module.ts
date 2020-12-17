import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { SubjectsResolver } from "./subjects.resolver";
import { SubjectsService } from "./subjects.service";
import { SubjectEntity } from "./entities/subject.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity]), AuthModule],
  providers: [SubjectsResolver, SubjectsService, AuthGuard],
  exports: [SubjectsService, AuthGuard],
})
export class SubjectsModule {}
