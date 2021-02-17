import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserEventsResolver } from "./user-events.resolver";
import { UserEventsService } from "./user-events.service";
import { UserEventEntity } from "./entities/user-event.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";
import { EventsModule } from "../events/events.module";

@Module({
  imports: [TypeOrmModule.forFeature([UserEventEntity]), AuthModule, EventsModule],
  providers: [UserEventsResolver, UserEventsService, AuthGuard],
  exports: [UserEventsService, AuthGuard],
})
export class UserEventsModule {}
