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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
let EventDto = class EventDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], EventDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], EventDto.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], EventDto.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], EventDto.prototype, "type", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], EventDto.prototype, "place", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], EventDto.prototype, "reward", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], EventDto.prototype, "placesLeft", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], EventDto.prototype, "userIsJoined", void 0);
__decorate([
    graphql_1.Field(() => graphql_type_json_1.default, { nullable: true }),
    __metadata("design:type", Array)
], EventDto.prototype, "tags", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], EventDto.prototype, "startsAt", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], EventDto.prototype, "endsAt", void 0);
EventDto = __decorate([
    graphql_1.ObjectType()
], EventDto);
exports.EventDto = EventDto;
//# sourceMappingURL=event.dto.js.map