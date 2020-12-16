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
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../../users/dto/user.dto");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const challenge_1 = require("../../../proto/challenge");
const challenge_exercise_dto_1 = require("../../challenge-exercises/dto/challenge-exercise.dto");
let ChallengeWithExercisesDto = class ChallengeWithExercisesDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ChallengeWithExercisesDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ChallengeWithExercisesDto.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ChallengeWithExercisesDto.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_dto_1.UserDto)
], ChallengeWithExercisesDto.prototype, "owner", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], ChallengeWithExercisesDto.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => [challenge_exercise_dto_1.ChallengeExerciseDto]),
    __metadata("design:type", Array)
], ChallengeWithExercisesDto.prototype, "exercises", void 0);
__decorate([
    graphql_1.Field(() => graphql_type_json_1.default, { nullable: true }),
    __metadata("design:type", Object)
], ChallengeWithExercisesDto.prototype, "config", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], ChallengeWithExercisesDto.prototype, "startsAt", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], ChallengeWithExercisesDto.prototype, "endsAt", void 0);
ChallengeWithExercisesDto = __decorate([
    graphql_1.ObjectType()
], ChallengeWithExercisesDto);
exports.ChallengeWithExercisesDto = ChallengeWithExercisesDto;
//# sourceMappingURL=challengeWithExercises.dto.js.map