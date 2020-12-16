import { Module } from "@nestjs/common";
import { UserExercisesModule } from "../user-exercises/user-exercises.module";
import { RecognitionGateway } from "./recognition.gateway";
// import { TrainingModule } from "../training/training.module";
// import { TrainingService } from "../training/training.service";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { Training } from "src/entities/training.entity";
// import { ExcersiceModule } from "../excersice/excersice.module";
// import { ExcersiceService } from "../excersice/excersice.service";
// import { PeriodService } from "./../period/period.service";

@Module({
    // imports: [TrainingModule, ExcersiceModule],
  imports: [UserExercisesModule],
  providers: [
    //   TrainingService,
    //   ExcersiceService,
    //   PeriodService,
    RecognitionGateway,
  ],
})
export class RecognitionModule {}
