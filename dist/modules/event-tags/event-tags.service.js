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
exports.EventTagsService = void 0;
const event_tag_entity_1 = require("./entities/event-tag.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const challenge_1 = require("../../proto/challenge");
const majors_service_1 = require("../majors/majors.service");
const specialties_service_1 = require("../specialties/specialties.service");
const programs_service_1 = require("../programs/programs.service");
const user_tag_entity_1 = require("../user-tags/entities/user-tag.entity");
const events_service_1 = require("../events/events.service");
const user_tags_service_1 = require("../user-tags/user-tags.service");
let EventTagsService = class EventTagsService {
    constructor(eventTagsRepository, eventsService, userTagsService, majorsService, specialtiesService, programsService) {
        this.eventTagsRepository = eventTagsRepository;
        this.eventsService = eventsService;
        this.userTagsService = userTagsService;
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
    async createEventTag(data) {
        const relationId = await this.getTagIdFromInput(data);
        if (!relationId) {
            throw new common_1.BadRequestException("No relation found for requested type and id");
        }
        const event = await this.eventsService.getEventById(data.eventId);
        if (!event) {
            throw new common_1.BadRequestException("No event found with such id");
        }
        return await this.eventTagsRepository.save({
            relationId: relationId,
            relationType: data.relationType,
            event: event,
        });
    }
    async getAllEventTags() {
        return await this.eventTagsRepository.find();
    }
    async getEventTags(eventId) {
        return await this.eventTagsRepository.find({ where: { eventId: eventId } });
    }
    async getEventsForUserTags(user) {
        const tagData = await this.userTagsService.getUserTags(user);
        const finalEventIds = [];
        const programIds = tagData.programs.map((program) => program.uid);
        const programEventTags = await this.eventTagsRepository.find({
            where: {
                relationId: typeorm_2.In(programIds),
                relationType: user_tag_entity_1.TagRelationType.program,
            },
        });
        const implicitSpecialtyIdsFromPrograms = [
            ...new Set(tagData.programs.map((program) => program.specialty.uid)),
        ];
        const implicitMajorIdsFromPrograms = [
            ...new Set(tagData.programs.map((program) => program.specialty.major.uid)),
        ];
        const explicitSpecialtyIds = tagData.specialties.map((specialty) => specialty.uid);
        const finalSpecialtyIds = [
            ...new Set([
                ...implicitSpecialtyIdsFromPrograms,
                ...explicitSpecialtyIds,
            ]),
        ];
        console.log("final specialty", finalSpecialtyIds);
        const specialtyEventTags = await this.eventTagsRepository.find({
            where: {
                relationId: typeorm_2.In(finalSpecialtyIds),
                relationType: user_tag_entity_1.TagRelationType.specialty,
            },
        });
        const implicitMajorIdsFromSpecialties = [
            ...new Set(tagData.specialties.map((specialty) => specialty.major.uid)),
        ];
        const explicitMajorIds = tagData.majors.map((major) => major.uid);
        const finalMajorIds = [
            ...new Set([
                ...implicitMajorIdsFromPrograms,
                ...implicitMajorIdsFromSpecialties,
                ...explicitMajorIds,
            ]),
        ];
        const majorEventTags = await this.eventTagsRepository.find({
            where: {
                relationId: typeorm_2.In(finalMajorIds),
                relationType: user_tag_entity_1.TagRelationType.major,
            },
        });
        finalEventIds.push(...programEventTags.map((tag) => tag.event.uid), ...specialtyEventTags.map((tag) => tag.event.uid), ...majorEventTags.map((tag) => tag.event.uid));
        console.log(finalEventIds);
        return await this.eventsService.getEventsByIds([...new Set(finalEventIds)]);
    }
    async getEventTagById(id) {
        return await this.eventTagsRepository.findOne(id);
    }
};
EventTagsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(event_tag_entity_1.EventTagEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        events_service_1.EventsService,
        user_tags_service_1.UserTagsService,
        majors_service_1.MajorsService,
        specialties_service_1.SpecialtiesService,
        programs_service_1.ProgramsService])
], EventTagsService);
exports.EventTagsService = EventTagsService;
//# sourceMappingURL=event-tags.service.js.map