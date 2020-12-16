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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_service_1 = require("@nestjs/jwt/dist/jwt.service");
var jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(jwtService, usersRepository) {
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
    }
    async createUser(data) {
        return await this.usersRepository.save({
            oauthId: data.oauthId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            picture: data.picture,
        });
    }
    async getUsers() {
        return await this.usersRepository.find();
    }
    async getUserById(id) {
        return await this.usersRepository.findOne(id);
    }
    async validateToken(token) {
        try {
            const res = this.jwtService.verify(token);
            const user = await this.usersRepository.findOne({
                oauthId: res["sub"],
            });
            return { user, isValid: true };
        }
        catch (e) {
            console.log(e);
            return { isValid: false };
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [jwt_service_1.JwtService,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map