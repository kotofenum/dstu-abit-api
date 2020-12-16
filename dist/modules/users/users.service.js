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
var jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(usersRepository) {
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
    async updateUser(data, user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.patronym = data.patronym;
        user.birthDate = data.birthDate;
        user.country = data.country;
        user.locality = data.locality;
        user.email = data.email;
        user.pwd = data.pwd;
        if (data.school) {
            user.school = data.school;
        }
        if (data.position) {
            user.position = data.position;
        }
        if (data.child) {
            user.child = data.child;
        }
        if (data.course) {
            user.course = data.course;
        }
        return await this.usersRepository.save(user);
    }
    async confirmUser(user) {
        user.phoneVerified = true;
        return await this.usersRepository.save(user);
    }
    async upsertUser(data) {
        const user = await this.usersRepository.findOne({
            where: { phone: data.phone },
        });
        if (!user) {
            const newUser = await this.usersRepository.save({
                phone: data.phone,
                type: data.type,
            });
            return newUser;
        }
        else {
            return user;
        }
    }
    async getUsers() {
        return await this.usersRepository.find();
    }
    async getUserByPhone(phone) {
        return await this.usersRepository.findOne({ where: { phone: phone } });
    }
    async getUserById(id) {
        return await this.usersRepository.findOne(id);
    }
    async validateToken(token) {
        try {
        }
        catch (e) {
            console.log(e);
            return { isValid: false };
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map