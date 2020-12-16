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
exports.UserTrainingsService = void 0;
const user_training_entity_1 = require("./entities/user-training.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_exercises_service_1 = require("../user-exercises/user-exercises.service");
const challenge_1 = require("../../proto/challenge");
const challenge_exercises_service_1 = require("../challenge-exercises/challenge-exercises.service");
const challenges_service_1 = require("../challenges/challenges.service");
let UserTrainingsService = class UserTrainingsService {
    constructor(userTrainingsRepository, userExercisesService, challengeExercisesService, challengesService) {
        this.userTrainingsRepository = userTrainingsRepository;
        this.userExercisesService = userExercisesService;
        this.challengeExercisesService = challengeExercisesService;
        this.challengesService = challengesService;
    }
    async createUserTraining(data, user, challenge) {
        const isEligbleForTraining = await this.challengesService.checkUserPassForChallenge(challenge, user);
        if (!isEligbleForTraining) {
            throw new common_1.BadRequestException("The user is not eligible for starting a training in this challenge");
        }
        const userTraining = await this.userTrainingsRepository.save({
            challenge: challenge,
            user: user,
            startedAt: new Date(),
        });
        const challengeConfig = JSON.parse(challenge.config);
        console.log("Challenge Exercise IDS: ", challengeConfig.exerciseIds);
        for (const challengeExerciseId of challengeConfig.exerciseIds) {
            console.log("Looking for challenge exercise with ID", challengeExerciseId);
            const challengeExercise = await this.challengeExercisesService.getChallengeExerciseById(challengeExerciseId);
            console.log("Found challenge exercise, its name is", challengeExercise.origin.name);
            const userExercise = await this.userExercisesService.createUserExercise({
                challengeExerciseId,
                trainingId: userTraining.uid,
            }, challengeExercise, userTraining);
            console.log(`User Exercise ID: ${userExercise.uid} created.`);
        }
        return await this.getUserTrainingById(userTraining.uid);
    }
    async finishUserTraining(user, trainingId) {
        const userTraining = await this.userTrainingsRepository.findOne({
            relations: ["exercises"],
            where: { uid: trainingId, user: user },
        });
        userTraining.endedAt = new Date();
        return await this.userTrainingsRepository.save(userTraining);
    }
    async getAllUserTrainings() {
        return await this.userTrainingsRepository.find({
            relations: ["exercises"],
        });
    }
    async getUserTrainings(user) {
        return await this.userTrainingsRepository.find({
            relations: ["exercises"],
            where: { user: user },
        });
    }
    async getUserTrainingsForChallenge(user, challengeId) {
        const challenge = await this.challengesService.getChallengeById(challengeId);
        return await this.userTrainingsRepository.find({
            relations: ["exercises"],
            where: { user: user, challenge: challenge },
        });
    }
    async getUserTrainingById(id) {
        return await this.userTrainingsRepository.findOne(id, {
            relations: ["exercises"],
        });
    }
};
UserTrainingsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_training_entity_1.UserTrainingEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_exercises_service_1.UserExercisesService,
        challenge_exercises_service_1.ChallengeExercisesService,
        challenges_service_1.ChallengesService])
], UserTrainingsService);
exports.UserTrainingsService = UserTrainingsService;
//# sourceMappingURL=user-trainings.service.js.map