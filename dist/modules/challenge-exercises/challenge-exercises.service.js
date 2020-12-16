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
exports.ChallengeExercisesService = void 0;
const challenge_exercise_entity_1 = require("./entities/challenge-exercise.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ChallengeExercisesService = class ChallengeExercisesService {
    constructor(challengeExercisesRepository) {
        this.challengeExercisesRepository = challengeExercisesRepository;
    }
    async createChallengeExercise(data, exerciseOrigin, challenge) {
        return await this.challengeExercisesRepository.save({
            origin: exerciseOrigin,
            challenge: challenge,
            type: data.type,
            goal: data.goal,
            customVideoUrl: data.customVideoUrl,
        });
    }
    async getChallengeExercises() {
        return await this.challengeExercisesRepository.find();
    }
    async getChallengeExerciseById(id) {
        return await this.challengeExercisesRepository.findOne(id);
    }
};
ChallengeExercisesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(challenge_exercise_entity_1.ChallengeExerciseEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChallengeExercisesService);
exports.ChallengeExercisesService = ChallengeExercisesService;
//# sourceMappingURL=challenge-exercises.service.js.map