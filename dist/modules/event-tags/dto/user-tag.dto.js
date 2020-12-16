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
exports.EventTagDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../../users/dto/user.dto");
const user_exercise_dto_1 = require("../../user-exercises/dto/user-exercise.dto");
const user_tag_entity_1 = require("../../user-tags/entities/user-tag.entity");
const event_dto_1 = require("../../events/dto/event.dto");
let EventTagDto = class EventTagDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], EventTagDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", event_dto_1.EventDto)
], EventTagDto.prototype, "event", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], EventTagDto.prototype, "relationId", void 0);
__decorate([
    graphql_1.Field(() => user_tag_entity_1.TagRelationType),
    __metadata("design:type", String)
], EventTagDto.prototype, "relationType", void 0);
EventTagDto = __decorate([
    graphql_1.ObjectType()
], EventTagDto);
exports.EventTagDto = EventTagDto;
//# sourceMappingURL=user-tag.dto.js.map