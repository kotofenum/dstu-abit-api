"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTagsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const user_tags_resolver_1 = require("./user-tags.resolver");
const user_tags_service_1 = require("./user-tags.service");
const user_tag_entity_1 = require("./entities/user-tag.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_module_1 = require("../auth/auth.module");
const majors_module_1 = require("../majors/majors.module");
const specialties_module_1 = require("../specialties/specialties.module");
const programs_module_1 = require("../programs/programs.module");
let UserTagsModule = class UserTagsModule {
};
UserTagsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_tag_entity_1.UserTagEntity]),
            auth_module_1.AuthModule,
            majors_module_1.MajorsModule,
            specialties_module_1.SpecialtiesModule,
            programs_module_1.ProgramsModule,
        ],
        providers: [user_tags_resolver_1.UserTagsResolver, user_tags_service_1.UserTagsService, auth_guard_1.AuthGuard],
        exports: [user_tags_service_1.UserTagsService, auth_guard_1.AuthGuard],
    })
], UserTagsModule);
exports.UserTagsModule = UserTagsModule;
//# sourceMappingURL=user-tags.module.js.map