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
exports.ProgramDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const major_dto_1 = require("../../majors/dto/major.dto");
const specialty_dto_1 = require("../../specialties/dto/specialty.dto");
let ProgramDto = class ProgramDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ProgramDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ProgramDto.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], ProgramDto.prototype, "attendance", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ProgramDto.prototype, "degree", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], ProgramDto.prototype, "studyPeriod", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ProgramDto.prototype, "languages", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ProgramDto.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", specialty_dto_1.SpecialtyDto)
], ProgramDto.prototype, "specialty", void 0);
ProgramDto = __decorate([
    graphql_1.ObjectType()
], ProgramDto);
exports.ProgramDto = ProgramDto;
//# sourceMappingURL=program.dto.js.map