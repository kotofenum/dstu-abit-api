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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsResolver = void 0;
const events_service_1 = require("./events.service");
const event_entity_1 = require("./entities/event.entity");
const graphql_1 = require("@nestjs/graphql");
const event_dto_1 = require("./dto/event.dto");
const event_input_1 = require("./inputs/event.input");
const auth_guard_1 = require("../../guards/auth.guard");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const join_event_input_1 = require("./inputs/join-event.input");
let EventsResolver = class EventsResolver {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    async events() {
        return this.eventsService.getEvents();
    }
    async event(uid) {
        return this.eventsService.getEventById(uid);
    }
    async addEvent(input, user) {
        console.log(input);
        return this.eventsService.createEvent(input, user);
    }
    async joinEvent(input) {
        return this.eventsService.joinEvent(input);
    }
    async leftEvent(input) {
        return this.eventsService.leftEvent(input);
    }
};
__decorate([
    graphql_1.Query(() => [event_dto_1.EventDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "events", null);
__decorate([
    graphql_1.Query(() => event_dto_1.EventDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "event", null);
__decorate([
    graphql_1.Mutation(() => event_dto_1.EventDto),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [event_input_1.EventInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "addEvent", null);
__decorate([
    graphql_1.Mutation(() => event_dto_1.EventDto),
    __param(0, graphql_1.Args("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_event_input_1.JoinEventInput]),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "joinEvent", null);
__decorate([
    graphql_1.Mutation(() => event_dto_1.EventDto),
    __param(0, graphql_1.Args("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_event_input_1.JoinEventInput]),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "leftEvent", null);
EventsResolver = __decorate([
    graphql_1.Resolver(() => event_entity_1.EventEntity),
    __metadata("design:paramtypes", [typeof (_a = typeof events_service_1.EventsService !== "undefined" && events_service_1.EventsService) === "function" ? _a : Object])
], EventsResolver);
exports.EventsResolver = EventsResolver;
//# sourceMappingURL=events.resolver.js.map