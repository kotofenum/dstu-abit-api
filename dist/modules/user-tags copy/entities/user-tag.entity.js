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
exports.UserTagEntity = exports.TagRelationType = void 0;
const graphql_1 = require("@nestjs/graphql");
const challenge_entity_1 = require("../../challenges/entities/challenge.entity");
const user_exercise_entity_1 = require("../../user-exercises/entities/user-exercise.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var TagRelationType;
(function (TagRelationType) {
    TagRelationType["major"] = "major";
    TagRelationType["specialty"] = "specialty";
    TagRelationType["program"] = "program";
})(TagRelationType = exports.TagRelationType || (exports.TagRelationType = {}));
graphql_1.registerEnumType(TagRelationType, {
    name: "TagRelationType",
});
let UserTagEntity = class UserTagEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], UserTagEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserTagEntity.prototype, "relationId", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserTagEntity.prototype, "relationType", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.tags, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserTagEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], UserTagEntity.prototype, "startedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], UserTagEntity.prototype, "endedAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserTagEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserTagEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], UserTagEntity.prototype, "dateDeleted", void 0);
UserTagEntity = __decorate([
    typeorm_1.Entity("user-tags")
], UserTagEntity);
exports.UserTagEntity = UserTagEntity;
//# sourceMappingURL=user-tag.entity.js.map