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
exports.SpecialtiesResolver = void 0;
const specialties_service_1 = require("./specialties.service");
const specialty_entity_1 = require("./entities/specialty.entity");
const graphql_1 = require("@nestjs/graphql");
const specialty_dto_1 = require("./dto/specialty.dto");
const specialty_input_1 = require("./inputs/specialty.input");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const majors_service_1 = require("../majors/majors.service");
const specialtiesOfMajor_input_1 = require("./inputs/specialtiesOfMajor.input");
let SpecialtiesResolver = class SpecialtiesResolver {
    constructor(specialtiesService, majorsService) {
        this.specialtiesService = specialtiesService;
        this.majorsService = majorsService;
    }
    async specialties() {
        return this.specialtiesService.getSpecialties();
    }
    async specialty(uid) {
        return this.specialtiesService.getSpecialtyById(uid);
    }
    async specialtiesOfMajor(input) {
        return this.specialtiesService.getSpecialtiesOfMajor(input.majorId);
    }
    async addSpecialty(input, user) {
        console.log(input);
        const major = await this.majorsService.getMajorById(input.majorId);
        return this.specialtiesService.createSpecialty(input, major);
    }
};
__decorate([
    graphql_1.Query(() => [specialty_dto_1.SpecialtyDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialtiesResolver.prototype, "specialties", null);
__decorate([
    graphql_1.Query(() => specialty_dto_1.SpecialtyDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialtiesResolver.prototype, "specialty", null);
__decorate([
    graphql_1.Query(() => [specialty_dto_1.SpecialtyDto]),
    __param(0, graphql_1.Args("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [specialtiesOfMajor_input_1.SpecialtiesOfMajorInput]),
    __metadata("design:returntype", Promise)
], SpecialtiesResolver.prototype, "specialtiesOfMajor", null);
__decorate([
    graphql_1.Mutation(() => specialty_dto_1.SpecialtyDto),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [specialty_input_1.SpecialtyInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], SpecialtiesResolver.prototype, "addSpecialty", null);
SpecialtiesResolver = __decorate([
    graphql_1.Resolver(() => specialty_entity_1.SpecialtyEntity),
    __metadata("design:paramtypes", [specialties_service_1.SpecialtiesService,
        majors_service_1.MajorsService])
], SpecialtiesResolver);
exports.SpecialtiesResolver = SpecialtiesResolver;
//# sourceMappingURL=specialties.resolver.js.map