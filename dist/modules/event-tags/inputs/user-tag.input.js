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
exports.UserTagInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_tag_entity_1 = require("../entities/user-tag.entity");
let UserTagInput = class UserTagInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserTagInput.prototype, "relationId", void 0);
__decorate([
    graphql_1.Field(() => user_tag_entity_1.TagRelationType),
    __metadata("design:type", String)
], UserTagInput.prototype, "relationType", void 0);
UserTagInput = __decorate([
    graphql_1.InputType()
], UserTagInput);
exports.UserTagInput = UserTagInput;
//# sourceMappingURL=user-tag.input.js.map