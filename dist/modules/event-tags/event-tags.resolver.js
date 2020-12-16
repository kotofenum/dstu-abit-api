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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTagsResolver = void 0;
const event_tags_service_1 = require("./event-tags.service");
const event_tag_entity_1 = require("./entities/event-tag.entity");
const graphql_1 = require("@nestjs/graphql");
const user_tag_dto_1 = require("./dto/user-tag.dto");
const event_tag_input_1 = require("./inputs/event-tag.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const event_dto_1 = require("../events/dto/event.dto");
let EventTagsResolver = class EventTagsResolver {
    constructor(eventTagsService) {
        this.eventTagsService = eventTagsService;
    }
    async eventTags() {
        return this.eventTagsService.getAllEventTags();
    }
    async userTag(uid) {
        return this.eventTagsService.getEventTagById(uid);
    }
    async createEventTag(input, user) {
        return this.eventTagsService.createEventTag(input);
    }
    async eventsForUserTags(user) {
        return this.eventTagsService.getEventsForUserTags(user);
    }
};
__decorate([
    graphql_1.Query(() => [user_tag_dto_1.EventTagDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTagsResolver.prototype, "eventTags", null);
__decorate([
    graphql_1.Query(() => user_tag_dto_1.EventTagDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventTagsResolver.prototype, "userTag", null);
__decorate([
    graphql_1.Mutation(() => user_tag_dto_1.EventTagDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_tag_input_1.EventTagInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], EventTagsResolver.prototype, "createEventTag", null);
__decorate([
    graphql_1.Query(() => [event_dto_1.EventDto]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], EventTagsResolver.prototype, "eventsForUserTags", null);
EventTagsResolver = __decorate([
    graphql_1.Resolver(() => event_tag_entity_1.EventTagEntity),
    __metadata("design:paramtypes", [event_tags_service_1.EventTagsService])
], EventTagsResolver);
exports.EventTagsResolver = EventTagsResolver;
//# sourceMappingURL=event-tags.resolver.js.map