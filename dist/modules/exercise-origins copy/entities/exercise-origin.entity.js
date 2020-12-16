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
exports.ExerciseOriginEntity = exports.ExerciseKey = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var ExerciseKey;
(function (ExerciseKey) {
    ExerciseKey["squats"] = "squats";
    ExerciseKey["pushUps"] = "push_ups";
    ExerciseKey["plank"] = "plank";
    ExerciseKey["jumpingJacks"] = "jumping_jacks";
})(ExerciseKey = exports.ExerciseKey || (exports.ExerciseKey = {}));
graphql_1.registerEnumType(ExerciseKey, {
    name: "ExerciseKey",
});
let ExerciseOriginEntity = class ExerciseOriginEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ExerciseOriginEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExerciseOriginEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.exerciseOrigins, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ExerciseOriginEntity.prototype, "owner", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExerciseOriginEntity.prototype, "key", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExerciseOriginEntity.prototype, "videoUrl", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ExerciseOriginEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ExerciseOriginEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], ExerciseOriginEntity.prototype, "dateDeleted", void 0);
ExerciseOriginEntity = __decorate([
    typeorm_1.Entity("exercise-origin")
], ExerciseOriginEntity);
exports.ExerciseOriginEntity = ExerciseOriginEntity;
//# sourceMappingURL=exercise-origin.entity.js.map