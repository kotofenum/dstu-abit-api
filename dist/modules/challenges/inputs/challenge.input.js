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
exports.ChallengeInput = void 0;
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const graphql_1 = require("@nestjs/graphql");
const challenge_1 = require("../../../proto/challenge");
let ChallengeInput = class ChallengeInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], ChallengeInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ChallengeInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], ChallengeInput.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => graphql_type_json_1.default),
    __metadata("design:type", Object)
], ChallengeInput.prototype, "config", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], ChallengeInput.prototype, "startsAt", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], ChallengeInput.prototype, "endsAt", void 0);
ChallengeInput = __decorate([
    graphql_1.InputType()
], ChallengeInput);
exports.ChallengeInput = ChallengeInput;
//# sourceMappingURL=challenge.input.js.map