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
exports.ProgramsResolver = void 0;
const programs_service_1 = require("./programs.service");
const program_entity_1 = require("./entities/program.entity");
const graphql_1 = require("@nestjs/graphql");
const program_dto_1 = require("./dto/program.dto");
const program_input_1 = require("./inputs/program.input");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const specialties_service_1 = require("../specialties/specialties.service");
const programsOfSpecialty_input_1 = require("./inputs/programsOfSpecialty.input");
let ProgramsResolver = class ProgramsResolver {
    constructor(programsService, specialtiesService) {
        this.programsService = programsService;
        this.specialtiesService = specialtiesService;
    }
    async programs() {
        return this.programsService.getPrograms();
    }
    async program(uid) {
        return this.programsService.getProgramById(uid);
    }
    async programsOfSpecialty(input) {
        return this.programsService.getProgramsOfSpecialty(input.specialtyId);
    }
    async addProgram(input, user) {
        const specialty = await this.specialtiesService.getSpecialtyById(input.specialtyId);
        return this.programsService.createProgram(input, specialty);
    }
};
__decorate([
    graphql_1.Query(() => [program_dto_1.ProgramDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProgramsResolver.prototype, "programs", null);
__decorate([
    graphql_1.Query(() => program_dto_1.ProgramDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProgramsResolver.prototype, "program", null);
__decorate([
    graphql_1.Query(() => [program_dto_1.ProgramDto]),
    __param(0, graphql_1.Args("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [programsOfSpecialty_input_1.ProgramsOfSpecialtyInput]),
    __metadata("design:returntype", Promise)
], ProgramsResolver.prototype, "programsOfSpecialty", null);
__decorate([
    graphql_1.Mutation(() => program_dto_1.ProgramDto),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [program_input_1.ProgramInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ProgramsResolver.prototype, "addProgram", null);
ProgramsResolver = __decorate([
    graphql_1.Resolver(() => program_entity_1.ProgramEntity),
    __metadata("design:paramtypes", [programs_service_1.ProgramsService,
        specialties_service_1.SpecialtiesService])
], ProgramsResolver);
exports.ProgramsResolver = ProgramsResolver;
//# sourceMappingURL=programs.resolver.js.map