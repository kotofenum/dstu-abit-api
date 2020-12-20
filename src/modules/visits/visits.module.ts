import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { VisitsResolver } from "./visits.resolver";
import { VisitsService } from "./visits.service";
import { VisitEntity } from "./entities/visit.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";
import { EventsModule } from "../events/events.module";

@Module({
  imports: [TypeOrmModule.forFeature([VisitEntity]), AuthModule, EventsModule],
  providers: [VisitsResolver, VisitsService, AuthGuard],
  exports: [VisitsService, AuthGuard],
})
export class VisitsModule {}
