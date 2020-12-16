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
exports.ChallengePassDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const challenge_dto_1 = require("../../challenges/dto/challenge.dto");
const user_dto_1 = require("../../users/dto/user.dto");
let ChallengePassDto = class ChallengePassDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ChallengePassDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", challenge_dto_1.ChallengeDto)
], ChallengePassDto.prototype, "challenge", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_dto_1.UserDto)
], ChallengePassDto.prototype, "user", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], ChallengePassDto.prototype, "cost", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], ChallengePassDto.prototype, "obtainedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], ChallengePassDto.prototype, "revokedAt", void 0);
ChallengePassDto = __decorate([
    graphql_1.ObjectType()
], ChallengePassDto);
exports.ChallengePassDto = ChallengePassDto;
//# sourceMappingURL=challenge-pass.dto.js.map