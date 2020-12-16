"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseOriginsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const exercise_origins_resolver_1 = require("./exercise-origins.resolver");
const exercise_origins_service_1 = require("./exercise-origins.service");
const exercise_origin_entity_1 = require("./entities/exercise-origin.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const users_module_1 = require("../users/users.module");
let ExerciseOriginsModule = class ExerciseOriginsModule {
};
ExerciseOriginsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([exercise_origin_entity_1.ExerciseOriginEntity]), users_module_1.UsersModule],
        providers: [exercise_origins_resolver_1.ExerciseOriginsResolver, exercise_origins_service_1.ExerciseOriginsService, auth_guard_1.AuthGuard],
        exports: [exercise_origins_service_1.ExerciseOriginsService, auth_guard_1.AuthGuard],
    })
], ExerciseOriginsModule);
exports.ExerciseOriginsModule = ExerciseOriginsModule;
//# sourceMappingURL=exercise-origins.module.js.map