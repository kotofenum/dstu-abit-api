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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExerciseDto = void 0;
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const graphql_1 = require("@nestjs/graphql");
const challenge_exercise_dto_1 = require("../../challenge-exercises/dto/challenge-exercise.dto");
const user_training_dto_1 = require("../../user-trainings/dto/user-training.dto");
let UserExerciseDto = class UserExerciseDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserExerciseDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", challenge_exercise_dto_1.ChallengeExerciseDto)
], UserExerciseDto.prototype, "challengeExercise", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_training_dto_1.UserTrainingDto)
], UserExerciseDto.prototype, "training", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], UserExerciseDto.prototype, "score", void 0);
__decorate([
    graphql_1.Field(() => graphql_type_json_1.default, { nullable: true }),
    __metadata("design:type", Array)
], UserExerciseDto.prototype, "frames", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], UserExerciseDto.prototype, "startedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], UserExerciseDto.prototype, "endedAt", void 0);
UserExerciseDto = __decorate([
    graphql_1.ObjectType()
], UserExerciseDto);
exports.UserExerciseDto = UserExerciseDto;
//# sourceMappingURL=user-exercise.dto.js.map