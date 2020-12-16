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
exports.ChallengeExerciseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const challenge_exercise_entity_1 = require("../entities/challenge-exercise.entity");
let ChallengeExerciseInput = class ChallengeExerciseInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ChallengeExerciseInput.prototype, "exerciseOriginId", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ChallengeExerciseInput.prototype, "challengeId", void 0);
__decorate([
    graphql_1.Field(() => challenge_exercise_entity_1.ExerciseType),
    __metadata("design:type", String)
], ChallengeExerciseInput.prototype, "type", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], ChallengeExerciseInput.prototype, "goal", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ChallengeExerciseInput.prototype, "customVideoUrl", void 0);
ChallengeExerciseInput = __decorate([
    graphql_1.InputType()
], ChallengeExerciseInput);
exports.ChallengeExerciseInput = ChallengeExerciseInput;
//# sourceMappingURL=challenge-exercise.input.js.map