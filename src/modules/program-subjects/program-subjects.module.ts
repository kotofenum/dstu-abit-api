import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ProgramSubjectsResolver } from "./program-subjects.resolver";
import { ProgramSubjectsService } from "./program-subjects.service";
import { ProgramSubjectEntity } from "./entities/program-subject.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";
import { MajorsModule } from "../majors/majors.module";
import { SpecialtiesModule } from "../specialties/specialties.module";
import { ProgramsModule } from "../programs/programs.module";
import { UserTagsModule } from "../user-tags/user-tags.module";
import { EventsModule } from "../events/events.module";
import { SubjectsModule } from "../subjects/subjects.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProgramSubjectEntity]),
    AuthModule,
    MajorsModule,
    SpecialtiesModule,
    ProgramsModule,
    SubjectsModule,
    EventsModule,
    UserTagsModule,
  ],
  providers: [ProgramSubjectsResolver, ProgramSubjectsService, AuthGuard],
  exports: [ProgramSubjectsService, AuthGuard],
})
export class ProgramSubjectsModule {}
