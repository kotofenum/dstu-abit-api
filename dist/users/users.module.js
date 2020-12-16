"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const users_resolver_1 = require("./users.resolver");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./entities/user.entity");
const dist_1 = require("@nestjs/jwt/dist");
const auth_guard_1 = require("../guards/auth.guard");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            dist_1.JwtModule.register({
                publicKey: `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7XiAR4ehLrXp2bhjo0Ou
      G/9q79T+rLs1iX9PLurCxIdzI75p2tGZqpVYQP2LNOiy314KcHR4j3J1tWXHaeBs
      OZr623qEKR6o8pu4YTWRpR3WRg3YxoNhTsDXiW2zE6IRftUvWE2nAkZ7/hk+Ak/P
      lEgohPeP/8rVITUaSLQpz0PMkW59dvjqpsj3XzO9sBsSeL54ZwSYhLPBn4LVeFCI
      tmhTZffd4MO6oCpNJnvGSNWPAJOEHAGMeQ+2oTsqJ5LTl+aFmR0LMAdkf53/VeQ0
      MMeQnowDImTdm3M8fDkE56T/Qoyq6vRSwFZ5cR4/a0JcytQATVsnUYvBJVD7eiZI
      RQIDAQAB\n-----END PUBLIC KEY-----`,
                signOptions: {
                    audience: process.env.AUTH0_AUDIENCE,
                    issuer: process.env.AUTH0_ISSUER_URL,
                    algorithm: "RS256",
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
        ],
        providers: [users_resolver_1.UsersResolver, users_service_1.UsersService, auth_guard_1.AuthGuard],
        exports: [users_service_1.UsersService, auth_guard_1.AuthGuard, dist_1.JwtModule],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map