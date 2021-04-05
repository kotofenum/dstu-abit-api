import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserEventsResolver } from "./user-events.resolver";
import { UserEventsService } from "./user-events.service";
import { UserEventEntity } from "./entities/user-event.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";
import { EventsModule } from "../events/events.module";
import { UsersService } from "../users/users.service";
import { UserEntity } from "../users/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEventEntity, UserEntity]), AuthModule, EventsModule],
  providers: [UserEventsResolver, UserEventsService, UsersService, AuthGuard],
  exports: [UserEventsService, AuthGuard],
})
export class UserEventsModule {}
