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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MajorsResolver = void 0;
const majors_service_1 = require("./majors.service");
const major_entity_1 = require("./entities/major.entity");
const graphql_1 = require("@nestjs/graphql");
const major_dto_1 = require("./dto/major.dto");
const major_input_1 = require("./inputs/major.input");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
let MajorsResolver = class MajorsResolver {
    constructor(majorsService) {
        this.majorsService = majorsService;
    }
    async majors() {
        return this.majorsService.getMajors();
    }
    async major(uid) {
        return this.majorsService.getMajorById(uid);
    }
    async addMajor(input, user) {
        console.log(input);
        return this.majorsService.createMajor(input, user);
    }
};
__decorate([
    graphql_1.Query(() => [major_dto_1.MajorDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MajorsResolver.prototype, "majors", null);
__decorate([
    graphql_1.Query(() => major_dto_1.MajorDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MajorsResolver.prototype, "major", null);
__decorate([
    graphql_1.Mutation(() => major_dto_1.MajorDto),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [major_input_1.MajorInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], MajorsResolver.prototype, "addMajor", null);
MajorsResolver = __decorate([
    graphql_1.Resolver(() => major_entity_1.MajorEntity),
    __metadata("design:paramtypes", [typeof (_a = typeof majors_service_1.MajorsService !== "undefined" && majors_service_1.MajorsService) === "function" ? _a : Object])
], MajorsResolver);
exports.MajorsResolver = MajorsResolver;
//# sourceMappingURL=majors.resolver.js.map