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
exports.ProgramEntity = void 0;
const major_entity_1 = require("../../majors/entities/major.entity");
const specialty_entity_1 = require("../../specialties/entities/specialty.entity");
const typeorm_1 = require("typeorm");
let ProgramEntity = class ProgramEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ProgramEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProgramEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], ProgramEntity.prototype, "attendance", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProgramEntity.prototype, "degree", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProgramEntity.prototype, "studyPeriod", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProgramEntity.prototype, "languages", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProgramEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => specialty_entity_1.SpecialtyEntity, (specialty) => specialty.programs, {
        eager: true,
    }),
    __metadata("design:type", specialty_entity_1.SpecialtyEntity)
], ProgramEntity.prototype, "specialty", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ProgramEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ProgramEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], ProgramEntity.prototype, "dateDeleted", void 0);
ProgramEntity = __decorate([
    typeorm_1.Entity("programs")
], ProgramEntity);
exports.ProgramEntity = ProgramEntity;
//# sourceMappingURL=program.entity.js.map