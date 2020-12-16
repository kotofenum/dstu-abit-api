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
exports.CodeDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../../users/dto/user.dto");
let CodeDto = class CodeDto {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CodeDto.prototype, "uid", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CodeDto.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CodeDto.prototype, "code", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], CodeDto.prototype, "expireAt", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_dto_1.UserDto)
], CodeDto.prototype, "issuer", void 0);
CodeDto = __decorate([
    graphql_1.ObjectType()
], CodeDto);
exports.CodeDto = CodeDto;
//# sourceMappingURL=code.dto copy.js.map