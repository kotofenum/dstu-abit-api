import { ExerciseOriginEntity } from "./entities/exercise-origin.entity";
import { Repository } from "typeorm";
import { ExerciseOriginInput } from "./inputs/exercise-origin.input";
import { UserEntity } from "../users/entities/user.entity";
export declare class ExerciseOriginsService {
    private readonly exerciseOriginsRepository;
    constructor(exerciseOriginsRepository: Repository<ExerciseOriginEntity>);
    createExerciseOrigin(data: ExerciseOriginInput, owner: UserEntity): Promise<ExerciseOriginEntity>;
    getExerciseOrigins(): Promise<ExerciseOriginEntity[]>;
    getExerciseOriginById(id: string): Promise<ExerciseOriginEntity>;
}
