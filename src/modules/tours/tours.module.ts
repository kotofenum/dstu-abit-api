import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ToursResolver } from "./tours.resolver";
import { ToursService } from "./tours.service";
import { TourEntity } from "./entities/tour.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([TourEntity]), AuthModule],
  providers: [ToursResolver, ToursService, AuthGuard],
  exports: [ToursService, AuthGuard],
})
export class ToursModule {}
