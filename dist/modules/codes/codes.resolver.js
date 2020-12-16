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
exports.CodesResolver = void 0;
const codes_service_1 = require("./codes.service");
const code_entity_1 = require("./entities/code.entity");
const graphql_1 = require("@nestjs/graphql");
const code_dto_1 = require("./dto/code.dto");
const code_input_1 = require("./inputs/code.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const confirm_code_input_1 = require("./inputs/confirm-code.input");
const access_1 = require("./dto/access");
const login_input_1 = require("./inputs/login.input");
let CodesResolver = class CodesResolver {
    constructor(codesService, usersService) {
        this.codesService = codesService;
        this.usersService = usersService;
    }
    async code(uid) {
        return this.codesService.getCodeById(uid);
    }
    async sendCode(input) {
        console.log(input);
        const user = await this.usersService.upsertUser({ phone: input.phone, type: input.type });
        return this.codesService.createCode(input, user);
    }
    async confirmCode(input) {
        console.log(input);
        return this.codesService.confirmCode(input);
    }
    async addCode(input, user) {
        console.log(input);
        return this.codesService.createCode(input, user);
    }
    async login(input) {
        console.log(input);
        return this.codesService.login(input);
    }
};
__decorate([
    graphql_1.Query(() => code_dto_1.CodeDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CodesResolver.prototype, "code", null);
__decorate([
    graphql_1.Mutation(() => code_dto_1.CodeDto),
    __param(0, graphql_1.Args("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [code_input_1.CodeInput]),
    __metadata("design:returntype", Promise)
], CodesResolver.prototype, "sendCode", null);
__decorate([
    graphql_1.Mutation(() => access_1.AccessDto),
    __param(0, graphql_1.Args("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [confirm_code_input_1.ConfirmCodeInput]),
    __metadata("design:returntype", Promise)
], CodesResolver.prototype, "confirmCode", null);
__decorate([
    graphql_1.Mutation(() => code_dto_1.CodeDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [code_input_1.CodeInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], CodesResolver.prototype, "addCode", null);
__decorate([
    graphql_1.Mutation(() => access_1.AccessDto),
    __param(0, graphql_1.Args("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput]),
    __metadata("design:returntype", Promise)
], CodesResolver.prototype, "login", null);
CodesResolver = __decorate([
    graphql_1.Resolver(() => code_entity_1.CodeEntity),
    __metadata("design:paramtypes", [codes_service_1.CodesService, users_service_1.UsersService])
], CodesResolver);
exports.CodesResolver = CodesResolver;
//# sourceMappingURL=codes.resolver.js.map