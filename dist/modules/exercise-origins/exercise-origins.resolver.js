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
exports.ExerciseOriginsResolver = void 0;
const exercise_origins_service_1 = require("./exercise-origins.service");
const exercise_origin_entity_1 = require("./entities/exercise-origin.entity");
const graphql_1 = require("@nestjs/graphql");
const exercise_origin_dto_1 = require("./dto/exercise-origin.dto");
const exercise_origin_input_1 = require("./inputs/exercise-origin.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
let ExerciseOriginsResolver = class ExerciseOriginsResolver {
    constructor(exerciseOriginsService) {
        this.exerciseOriginsService = exerciseOriginsService;
    }
    async exerciseOrigins() {
        return this.exerciseOriginsService.getExerciseOrigins();
    }
    async exerciseOrigin(uid) {
        return this.exerciseOriginsService.getExerciseOriginById(uid);
    }
    async addExerciseOrigin(input, user) {
        return this.exerciseOriginsService.createExerciseOrigin(input, user);
    }
};
__decorate([
    graphql_1.Query(() => [exercise_origin_dto_1.ExerciseOriginDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExerciseOriginsResolver.prototype, "exerciseOrigins", null);
__decorate([
    graphql_1.Query(() => exercise_origin_dto_1.ExerciseOriginDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExerciseOriginsResolver.prototype, "exerciseOrigin", null);
__decorate([
    graphql_1.Mutation(() => exercise_origin_dto_1.ExerciseOriginDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exercise_origin_input_1.ExerciseOriginInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ExerciseOriginsResolver.prototype, "addExerciseOrigin", null);
ExerciseOriginsResolver = __decorate([
    graphql_1.Resolver(() => exercise_origin_entity_1.ExerciseOriginEntity),
    __metadata("design:paramtypes", [exercise_origins_service_1.ExerciseOriginsService])
], ExerciseOriginsResolver);
exports.ExerciseOriginsResolver = ExerciseOriginsResolver;
//# sourceMappingURL=exercise-origins.resolver.js.map