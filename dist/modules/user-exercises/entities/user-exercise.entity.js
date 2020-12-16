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
exports.UserExerciseEntity = void 0;
const challenge_exercise_entity_1 = require("../../challenge-exercises/entities/challenge-exercise.entity");
const user_training_entity_1 = require("../../user-trainings/entities/user-training.entity");
const typeorm_1 = require("typeorm");
let UserExerciseEntity = class UserExerciseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], UserExerciseEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => challenge_exercise_entity_1.ChallengeExerciseEntity, (challengeExercise) => challengeExercise.userExercises, {
        eager: true,
    }),
    __metadata("design:type", challenge_exercise_entity_1.ChallengeExerciseEntity)
], UserExerciseEntity.prototype, "challengeExercise", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_training_entity_1.UserTrainingEntity, (userTraining) => userTraining.exercises, {
        eager: true,
    }),
    __metadata("design:type", user_training_entity_1.UserTrainingEntity)
], UserExerciseEntity.prototype, "training", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserExerciseEntity.prototype, "score", void 0);
__decorate([
    typeorm_1.Column("simple-json", { nullable: true }),
    __metadata("design:type", Array)
], UserExerciseEntity.prototype, "frames", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], UserExerciseEntity.prototype, "startedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], UserExerciseEntity.prototype, "endedAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserExerciseEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserExerciseEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], UserExerciseEntity.prototype, "dateDeleted", void 0);
UserExerciseEntity = __decorate([
    typeorm_1.Entity("user-exercises")
], UserExerciseEntity);
exports.UserExerciseEntity = UserExerciseEntity;
//# sourceMappingURL=user-exercise.entity.js.map