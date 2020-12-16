"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodesModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const codes_resolver_1 = require("./codes.resolver");
const codes_service_1 = require("./codes.service");
const code_entity_1 = require("./entities/code.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_module_1 = require("../auth/auth.module");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
let CodesModule = class CodesModule {
};
CodesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([code_entity_1.CodeEntity, user_entity_1.UserEntity]), auth_module_1.AuthModule, common_1.HttpModule.register({})],
        providers: [codes_resolver_1.CodesResolver, codes_service_1.CodesService, auth_guard_1.AuthGuard, users_service_1.UsersService],
        exports: [codes_service_1.CodesService, auth_guard_1.AuthGuard],
    })
], CodesModule);
exports.CodesModule = CodesModule;
//# sourceMappingURL=codes.module.js.map