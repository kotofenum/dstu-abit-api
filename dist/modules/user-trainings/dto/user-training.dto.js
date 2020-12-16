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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTrainingDto = void 0;
const challenge_dto_1 = require("./../../challenges/dto/challenge.dto");
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../../users/dto/user.dto");
const user_exercise_dto_1 = require("../../user-exercises/dto/user-exercise.dto");
let UserTrainingDto = class UserTrainingDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserTrainingDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", challenge_dto_1.ChallengeDto)
], UserTrainingDto.prototype, "challenge", void 0);
__decorate([
    graphql_1.Field(() => [user_exercise_dto_1.UserExerciseDto]),
    __metadata("design:type", Array)
], UserTrainingDto.prototype, "exercises", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_dto_1.UserDto)
], UserTrainingDto.prototype, "user", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], UserTrainingDto.prototype, "startedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], UserTrainingDto.prototype, "endedAt", void 0);
UserTrainingDto = __decorate([
    graphql_1.ObjectType()
], UserTrainingDto);
exports.UserTrainingDto = UserTrainingDto;
//# sourceMappingURL=user-training.dto.js.map