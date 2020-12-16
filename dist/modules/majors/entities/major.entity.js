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
exports.MajorEntity = void 0;
const program_entity_1 = require("../../programs/entities/program.entity");
const specialty_entity_1 = require("../../specialties/entities/specialty.entity");
const typeorm_1 = require("typeorm");
let MajorEntity = class MajorEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], MajorEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MajorEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], MajorEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MajorEntity.prototype, "fundedPlaces", void 0);
__decorate([
    typeorm_1.OneToMany(() => specialty_entity_1.SpecialtyEntity, (specialty) => specialty.major, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], MajorEntity.prototype, "specialties", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], MajorEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], MajorEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], MajorEntity.prototype, "dateDeleted", void 0);
MajorEntity = __decorate([
    typeorm_1.Entity("majors")
], MajorEntity);
exports.MajorEntity = MajorEntity;
//# sourceMappingURL=major.entity.js.map