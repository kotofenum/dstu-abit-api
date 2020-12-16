"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MajorsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const majors_resolver_1 = require("./majors.resolver");
const majors_service_1 = require("./majors.service");
const major_entity_1 = require("./entities/major.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const users_module_1 = require("../users/users.module");
let MajorsModule = class MajorsModule {
};
MajorsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([major_entity_1.MajorEntity]), users_module_1.UsersModule],
        providers: [majors_resolver_1.MajorsResolver, majors_service_1.MajorsService, auth_guard_1.AuthGuard],
        exports: [majors_service_1.MajorsService, auth_guard_1.AuthGuard],
    })
], MajorsModule);
exports.MajorsModule = MajorsModule;
//# sourceMappingURL=majors.module.js.map