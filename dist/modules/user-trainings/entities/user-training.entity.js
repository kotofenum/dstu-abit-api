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
exports.UserTrainingEntity = void 0;
const challenge_entity_1 = require("../../challenges/entities/challenge.entity");
const user_exercise_entity_1 = require("../../user-exercises/entities/user-exercise.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let UserTrainingEntity = class UserTrainingEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], UserTrainingEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => challenge_entity_1.ChallengeEntity, (challenge) => challenge.userTrainings, {
        eager: true,
    }),
    __metadata("design:type", challenge_entity_1.ChallengeEntity)
], UserTrainingEntity.prototype, "challenge", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_exercise_entity_1.UserExerciseEntity, userExercise => userExercise.training, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], UserTrainingEntity.prototype, "exercises", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.trainings, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserTrainingEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], UserTrainingEntity.prototype, "startedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], UserTrainingEntity.prototype, "endedAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserTrainingEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserTrainingEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], UserTrainingEntity.prototype, "dateDeleted", void 0);
UserTrainingEntity = __decorate([
    typeorm_1.Entity("user-trainings")
], UserTrainingEntity);
exports.UserTrainingEntity = UserTrainingEntity;
//# sourceMappingURL=user-training.entity.js.map