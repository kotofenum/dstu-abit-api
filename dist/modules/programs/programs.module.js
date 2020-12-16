"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const programs_resolver_1 = require("./programs.resolver");
const programs_service_1 = require("./programs.service");
const program_entity_1 = require("./entities/program.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_module_1 = require("../auth/auth.module");
const specialties_module_1 = require("../specialties/specialties.module");
let ProgramsModule = class ProgramsModule {
};
ProgramsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([program_entity_1.ProgramEntity]),
            auth_module_1.AuthModule,
            specialties_module_1.SpecialtiesModule,
        ],
        providers: [programs_resolver_1.ProgramsResolver, programs_service_1.ProgramsService, auth_guard_1.AuthGuard],
        exports: [programs_service_1.ProgramsService, auth_guard_1.AuthGuard],
    })
], ProgramsModule);
exports.ProgramsModule = ProgramsModule;
//# sourceMappingURL=programs.module.js.map