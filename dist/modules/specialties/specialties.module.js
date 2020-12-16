"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtiesModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const specialties_resolver_1 = require("./specialties.resolver");
const specialties_service_1 = require("./specialties.service");
const specialty_entity_1 = require("./entities/specialty.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const majors_module_1 = require("../majors/majors.module");
const auth_module_1 = require("../auth/auth.module");
let SpecialtiesModule = class SpecialtiesModule {
};
SpecialtiesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([specialty_entity_1.SpecialtyEntity]),
            majors_module_1.MajorsModule,
            auth_module_1.AuthModule,
        ],
        providers: [specialties_resolver_1.SpecialtiesResolver, specialties_service_1.SpecialtiesService, auth_guard_1.AuthGuard],
        exports: [specialties_service_1.SpecialtiesService, auth_guard_1.AuthGuard],
    })
], SpecialtiesModule);
exports.SpecialtiesModule = SpecialtiesModule;
//# sourceMappingURL=specialties.module.js.map