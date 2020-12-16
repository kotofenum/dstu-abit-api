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
exports.UserTagsService = void 0;
const user_tag_entity_1 = require("./entities/user-tag.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const challenge_1 = require("../../proto/challenge");
const majors_service_1 = require("../majors/majors.service");
const specialties_service_1 = require("../specialties/specialties.service");
const programs_service_1 = require("../programs/programs.service");
let UserTagsService = class UserTagsService {
    constructor(userTagsRepository, majorsService, specialtiesService, programsService) {
        this.userTagsRepository = userTagsRepository;
        this.majorsService = majorsService;
        this.specialtiesService = specialtiesService;
        this.programsService = programsService;
    }
    async getTagIdFromInput(input) {
        switch (input.relationType) {
            case user_tag_entity_1.TagRelationType.major: {
                const major = await this.majorsService.getMajorById(input.relationId);
                return major === null || major === void 0 ? void 0 : major.uid;
            }
            case user_tag_entity_1.TagRelationType.specialty: {
                const specialty = await this.specialtiesService.getSpecialtyById(input.relationId);
                return specialty === null || specialty === void 0 ? void 0 : specialty.uid;
            }
            case user_tag_entity_1.TagRelationType.program: {
                const program = await this.programsService.getProgramById(input.relationId);
                return program === null || program === void 0 ? void 0 : program.uid;
            }
        }
    }
    async createUserTag(data, user) {
        const relationId = await this.getTagIdFromInput(data);
        if (!relationId) {
            throw new common_1.BadRequestException("No relation found for requested type and id");
        }
        return await this.userTagsRepository.save({
            relationId: relationId,
            relationType: data.relationType,
            user: user,
        });
    }
    async getAllUserTags() {
        return await this.userTagsRepository.find();
    }
    async getUserTags(user) {
        const majorTags = await this.userTagsRepository.find({
            where: { user: user, relationType: user_tag_entity_1.TagRelationType.major },
        });
        const majorTagIds = majorTags.map((tag) => tag.relationId);
        const majors = await this.majorsService.getMajorsByIds(majorTagIds);
        const specialtyTags = await this.userTagsRepository.find({
            where: { user: user, relationType: user_tag_entity_1.TagRelationType.specialty },
        });
        const specialtyTagIds = specialtyTags.map((tag) => tag.relationId);
        const specialties = await this.specialtiesService.getSpecialtiesByIds(specialtyTagIds);
        const programTags = await this.userTagsRepository.find({
            where: { user: user, relationType: user_tag_entity_1.TagRelationType.program },
        });
        const programTagIds = programTags.map((tag) => tag.relationId);
        const programs = await this.programsService.getProgramsByIds(programTagIds);
        return { majors: majors, specialties: specialties, programs: programs };
    }
    async getUserTagById(id) {
        return await this.userTagsRepository.findOne(id);
    }
};
UserTagsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_tag_entity_1.UserTagEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        majors_service_1.MajorsService,
        specialties_service_1.SpecialtiesService,
        programs_service_1.ProgramsService])
], UserTagsService);
exports.UserTagsService = UserTagsService;
//# sourceMappingURL=user-tags.service.js.map