import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { EventsResolver } from "./events.resolver";
import { EventsService } from "./events.service";
import { EventEntity } from "./entities/event.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity]), AuthModule],
  providers: [EventsResolver, EventsService, AuthGuard],
  exports: [EventsService, AuthGuard],
})
export class EventsModule {}
