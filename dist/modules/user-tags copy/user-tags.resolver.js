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
exports.UserTagsResolver = void 0;
const user_tags_service_1 = require("./user-tags.service");
const user_tag_entity_1 = require("./entities/user-tag.entity");
const graphql_1 = require("@nestjs/graphql");
const user_tag_dto_1 = require("./dto/user-tag.dto");
const user_tag_input_1 = require("./inputs/user-tag.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const connected_user_tags_dto_1 = require("./dto/connected-user-tags.dto");
let UserTagsResolver = class UserTagsResolver {
    constructor(userTagsService) {
        this.userTagsService = userTagsService;
    }
    async userTags() {
        return this.userTagsService.getAllUserTags();
    }
    async myUserTags(user) {
        return this.userTagsService.getUserTags(user);
    }
    async userTag(uid) {
        return this.userTagsService.getUserTagById(uid);
    }
    async createUserTag(input, user) {
        return this.userTagsService.createUserTag(input, user);
    }
};
__decorate([
    graphql_1.Query(() => [user_tag_dto_1.UserTagDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserTagsResolver.prototype, "userTags", null);
__decorate([
    graphql_1.Query(() => connected_user_tags_dto_1.ConnectedUserTagsDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserTagsResolver.prototype, "myUserTags", null);
__decorate([
    graphql_1.Query(() => user_tag_dto_1.UserTagDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserTagsResolver.prototype, "userTag", null);
__decorate([
    graphql_1.Mutation(() => user_tag_dto_1.UserTagDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_tag_input_1.UserTagInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserTagsResolver.prototype, "createUserTag", null);
UserTagsResolver = __decorate([
    graphql_1.Resolver(() => user_tag_entity_1.UserTagEntity),
    __metadata("design:paramtypes", [user_tags_service_1.UserTagsService])
], UserTagsResolver);
exports.UserTagsResolver = UserTagsResolver;
//# sourceMappingURL=user-tags.resolver.js.map