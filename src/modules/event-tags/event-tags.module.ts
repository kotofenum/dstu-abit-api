import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { EventTagsResolver } from "./event-tags.resolver";
import { EventTagsService } from "./event-tags.service";
import { EventTagEntity } from "./entities/event-tag.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";
import { MajorsModule } from "../majors/majors.module";
import { SpecialtiesModule } from "../specialties/specialties.module";
import { ProgramsModule } from "../programs/programs.module";
import { UserTagsModule } from "../user-tags/user-tags.module";
import { EventsModule } from "../events/events.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([EventTagEntity]),
    AuthModule,
    MajorsModule,
    SpecialtiesModule,
    ProgramsModule,
    EventsModule,
    UserTagsModule,
  ],
  providers: [EventTagsResolver, EventTagsService, AuthGuard],
  exports: [EventTagsService, AuthGuard],
})
export class EventTagsModule {}
