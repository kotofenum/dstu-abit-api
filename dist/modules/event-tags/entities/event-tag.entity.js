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
exports.EventTagEntity = void 0;
const challenge_entity_1 = require("../../challenges/entities/challenge.entity");
const event_entity_1 = require("../../events/entities/event.entity");
const user_exercise_entity_1 = require("../../user-exercises/entities/user-exercise.entity");
const user_tag_entity_1 = require("../../user-tags/entities/user-tag.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let EventTagEntity = class EventTagEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], EventTagEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => event_entity_1.EventEntity, (event) => event.tags, {
        eager: true,
    }),
    __metadata("design:type", event_entity_1.EventEntity)
], EventTagEntity.prototype, "event", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EventTagEntity.prototype, "relationId", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EventTagEntity.prototype, "relationType", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], EventTagEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], EventTagEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], EventTagEntity.prototype, "dateDeleted", void 0);
EventTagEntity = __decorate([
    typeorm_1.Entity("event-tags")
], EventTagEntity);
exports.EventTagEntity = EventTagEntity;
//# sourceMappingURL=event-tag.entity.js.map