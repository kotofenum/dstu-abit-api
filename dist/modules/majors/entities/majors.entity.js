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
exports.EventEntity = void 0;
const challenge_exercise_entity_1 = require("../../challenge-exercises/entities/challenge-exercise.entity");
const challenge_pass_entity_1 = require("../../challenge-passes/entities/challenge-pass.entity");
const user_training_entity_1 = require("../../user-trainings/entities/user-training.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const challenge_1 = require("../../../proto/challenge");
const typeorm_1 = require("typeorm");
let EventEntity = class EventEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], EventEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EventEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EventEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "place", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EventEntity.prototype, "reward", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EventEntity.prototype, "placesLeft", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], EventEntity.prototype, "userIsJoined", void 0);
__decorate([
    typeorm_1.Column("simple-json"),
    __metadata("design:type", Array)
], EventEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], EventEntity.prototype, "startsAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], EventEntity.prototype, "endsAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], EventEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], EventEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], EventEntity.prototype, "dateDeleted", void 0);
EventEntity = __decorate([
    typeorm_1.Entity("events")
], EventEntity);
exports.EventEntity = EventEntity;
//# sourceMappingURL=majors.entity.js.map