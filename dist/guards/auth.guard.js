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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("../modules/auth/auth.service");
const users_service_1 = require("../modules/users/users.service");
let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
    async canActivate(context) {
        const req = this.getRequest(context);
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new common_1.BadRequestException('Authorization header not found.');
        }
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer') {
            throw new common_1.BadRequestException(`Authentication type \'Bearer\' required. Found \'${type}\'`);
        }
        const { isValid, user } = await this.authService.validateToken(token);
        console.log(isValid, user);
        if (isValid) {
            req.user = user;
            return true;
        }
        throw new common_1.UnauthorizedException('Token not valid');
    }
};
AuthGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map