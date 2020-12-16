"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExercisesService = void 0;
const user_exercise_entity_1 = require("./entities/user-exercise.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_training_entity_1 = require("../user-trainings/entities/user-training.entity");
let UserExercisesService = class UserExercisesService {
    constructor(userExercisesRepository, userTrainingsRepository) {
        this.userExercisesRepository = userExercisesRepository;
        this.userTrainingsRepository = userTrainingsRepository;
    }
    async createUserExercise(data, challengeExercise, userTraining) {
        return await this.userExercisesRepository.save({
            challengeExercise: challengeExercise,
            training: userTraining,
            score: 0,
        });
    }
    async getUserExercises() {
        return await this.userExercisesRepository.find();
    }
    async getUserExerciseById(id) {
        return await this.userExercisesRepository.findOne(id);
    }
    async updateExerciseProgress(exerciseId, trainingId) {
        try {
            console.log("EXERCISE ID: ", exerciseId);
            const exercise = await this.userExercisesRepository.findOneOrFail({
                uid: exerciseId,
            });
            exercise.score = exercise.score + 1;
            if (exercise.score >= exercise.challengeExercise.goal) {
                exercise.endedAt = new Date();
                const trainingExercises = await this.userExercisesRepository.find({
                    where: { training: exercise.training },
                });
                console.log(trainingExercises.map((exer) => ({ id: exer.uid, endedAt: exer.endedAt })));
                const allCompleted = trainingExercises
                    .filter((ex) => ex.uid !== exercise.uid)
                    .every((ex) => ex.endedAt);
                console.log(`All exercises completed in training ID: ${exercise.training.uid} — ${allCompleted}`);
                if (allCompleted) {
                    exercise.training.endedAt = new Date();
                    console.log(exercise.training.endedAt);
                    await this.userTrainingsRepository.save(exercise.training);
                }
            }
            return await this.userExercisesRepository.save(exercise);
        }
        catch (err) {
            throw err;
        }
    }
};
UserExercisesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_exercise_entity_1.UserExerciseEntity)),
    __param(1, typeorm_1.InjectRepository(user_training_entity_1.UserTrainingEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserExercisesService);
exports.UserExercisesService = UserExercisesService;
//# sourceMappingURL=user-exercises.service.js.map