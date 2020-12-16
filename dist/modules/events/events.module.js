"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const events_resolver_1 = require("./events.resolver");
const events_service_1 = require("./events.service");
const event_entity_1 = require("./entities/event.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_module_1 = require("../auth/auth.module");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([event_entity_1.EventEntity]), auth_module_1.AuthModule],
        providers: [events_resolver_1.EventsResolver, events_service_1.EventsService, auth_guard_1.AuthGuard],
        exports: [events_service_1.EventsService, auth_guard_1.AuthGuard],
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map