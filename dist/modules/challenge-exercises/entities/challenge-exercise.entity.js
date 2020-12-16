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
exports.ChallengeExerciseEntity = exports.ExerciseType = void 0;
const exercise_origin_entity_1 = require("../../exercise-origins/entities/exercise-origin.entity");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const challenge_entity_1 = require("../../challenges/entities/challenge.entity");
const user_exercise_entity_1 = require("../../user-exercises/entities/user-exercise.entity");
var ExerciseType;
(function (ExerciseType) {
    ExerciseType["detection"] = "detection";
    ExerciseType["timer"] = "timer";
})(ExerciseType = exports.ExerciseType || (exports.ExerciseType = {}));
graphql_1.registerEnumType(ExerciseType, {
    name: "ExerciseType",
});
let ChallengeExerciseEntity = class ChallengeExerciseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ChallengeExerciseEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => exercise_origin_entity_1.ExerciseOriginEntity, (exerciseOrigin) => exerciseOrigin.challengeExercises, {
        eager: true,
    }),
    __metadata("design:type", exercise_origin_entity_1.ExerciseOriginEntity)
], ChallengeExerciseEntity.prototype, "origin", void 0);
__decorate([
    typeorm_1.ManyToOne(() => challenge_entity_1.ChallengeEntity, (challenge) => challenge.exercises, {
        eager: true,
    }),
    __metadata("design:type", challenge_entity_1.ChallengeEntity)
], ChallengeExerciseEntity.prototype, "challenge", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_exercise_entity_1.UserExerciseEntity, userExercise => userExercise.challengeExercise, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], ChallengeExerciseEntity.prototype, "userExercises", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengeExerciseEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ChallengeExerciseEntity.prototype, "goal", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ChallengeExerciseEntity.prototype, "customVideoUrl", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ChallengeExerciseEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ChallengeExerciseEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], ChallengeExerciseEntity.prototype, "dateDeleted", void 0);
ChallengeExerciseEntity = __decorate([
    typeorm_1.Entity("challenge-exercise")
], ChallengeExerciseEntity);
exports.ChallengeExerciseEntity = ChallengeExerciseEntity;
//# sourceMappingURL=challenge-exercise.entity.js.map