import { ExerciseOriginsService } from "./exercise-origins.service";
import { ExerciseOriginDto } from "./dto/exercise-origin.dto";
import { ExerciseOriginInput } from "./inputs/exercise-origin.input";
import { UserEntity } from "../users/entities/user.entity";
export declare class ExerciseOriginsResolver {
    private readonly exerciseOriginsService;
    constructor(exerciseOriginsService: ExerciseOriginsService);
    exerciseOrigins(): Promise<ExerciseOriginDto[]>;
    exerciseOrigin(uid: string): Promise<ExerciseOriginDto>;
    addExerciseOrigin(input: ExerciseOriginInput, user: UserEntity): Promise<ExerciseOriginDto>;
}
