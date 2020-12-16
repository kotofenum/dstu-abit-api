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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedEventTagsDto = void 0;
const major_dto_1 = require("../../majors/dto/major.dto");
const program_dto_1 = require("../../programs/dto/program.dto");
const specialty_dto_1 = require("../../specialties/dto/specialty.dto");
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../../users/dto/user.dto");
const user_exercise_dto_1 = require("../../user-exercises/dto/user-exercise.dto");
let ConnectedEventTagsDto = class ConnectedEventTagsDto {
};
__decorate([
    graphql_1.Field(() => [major_dto_1.MajorDto]),
    __metadata("design:type", Array)
], ConnectedEventTagsDto.prototype, "majors", void 0);
__decorate([
    graphql_1.Field(() => [specialty_dto_1.SpecialtyDto]),
    __metadata("design:type", Array)
], ConnectedEventTagsDto.prototype, "specialties", void 0);
__decorate([
    graphql_1.Field(() => [program_dto_1.ProgramDto]),
    __metadata("design:type", Array)
], ConnectedEventTagsDto.prototype, "programs", void 0);
ConnectedEventTagsDto = __decorate([
    graphql_1.ObjectType()
], ConnectedEventTagsDto);
exports.ConnectedEventTagsDto = ConnectedEventTagsDto;
//# sourceMappingURL=connected-event-tags.dto.js.map