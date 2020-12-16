"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTagsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const event_tags_resolver_1 = require("./event-tags.resolver");
const event_tags_service_1 = require("./event-tags.service");
const event_tag_entity_1 = require("./entities/event-tag.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_module_1 = require("../auth/auth.module");
const majors_module_1 = require("../majors/majors.module");
const specialties_module_1 = require("../specialties/specialties.module");
const programs_module_1 = require("../programs/programs.module");
const user_tags_module_1 = require("../user-tags/user-tags.module");
const events_module_1 = require("../events/events.module");
let EventTagsModule = class EventTagsModule {
};
EventTagsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([event_tag_entity_1.EventTagEntity]),
            auth_module_1.AuthModule,
            majors_module_1.MajorsModule,
            specialties_module_1.SpecialtiesModule,
            programs_module_1.ProgramsModule,
            events_module_1.EventsModule,
            user_tags_module_1.UserTagsModule,
        ],
        providers: [event_tags_resolver_1.EventTagsResolver, event_tags_service_1.EventTagsService, auth_guard_1.AuthGuard],
        exports: [event_tags_service_1.EventTagsService, auth_guard_1.AuthGuard],
    })
], EventTagsModule);
exports.EventTagsModule = EventTagsModule;
//# sourceMappingURL=event-tags.module.js.map