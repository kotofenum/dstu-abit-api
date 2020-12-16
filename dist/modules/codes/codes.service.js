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
exports.CodesService = void 0;
const code_entity_1 = require("./entities/code.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_service_1 = require("../auth/auth.service");
const users_service_1 = require("../users/users.service");
const cryptoRandomString = require("crypto-random-string");
let CodesService = class CodesService {
    constructor(codesRepository, authService, usersService, httpService) {
        this.codesRepository = codesRepository;
        this.authService = authService;
        this.usersService = usersService;
        this.httpService = httpService;
    }
    async createCode(data, user) {
        const code = cryptoRandomString({ length: 5, type: "numeric" });
        console.log(code);
        return await this.codesRepository.save({
            phone: data.phone,
            code: code,
            expireAt: new Date(new Date().getTime() + 5 * 60000),
            issuer: user,
        });
    }
    async confirmCode(data) {
        const codes = await this.codesRepository.find({
            where: { phone: data.phone, code: data.code },
        });
        if (codes.some((code) => code.expireAt.getTime() > new Date().getTime())) {
            const user = await this.usersService.getUserByPhone(data.phone);
            await this.usersService.confirmUser(user);
            return this.authService.login(user);
        }
        else {
            return { access_token: null };
        }
    }
    async login(data) {
        const user = await this.usersService.getUserByPhone(data.phone);
        if (user && user.pwd && data.password && user.pwd === data.password) {
            return this.authService.login(user);
        }
        else {
            return { access_token: null };
        }
    }
    async getLastCodeForPhone(phone) {
        const last = await this.codesRepository.findOne({
            where: { phone: phone },
            order: { dateCreated: "DESC" },
        });
        return last;
    }
    async getCodeById(id) {
        return await this.codesRepository.findOne(id);
    }
    async getCodesByIds(ids) {
        return await this.codesRepository.findByIds(ids);
    }
    async sendCodeViaSMS(phone, code) {
        const apiUrl = `https://sms.ru/sms/send`;
        const query = {
            api_id: process.env.SMS_TOKEN || "unknown",
            to: phone,
            msg: code,
            json: 1,
        };
        const dto = {
            params: query,
        };
        const response = await this.httpService
            .get(apiUrl, {
            params: dto,
        })
            .toPromise();
        console.log(response.data);
        return response.data;
    }
};
CodesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(code_entity_1.CodeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService,
        users_service_1.UsersService,
        common_1.HttpService])
], CodesService);
exports.CodesService = CodesService;
//# sourceMappingURL=codes.service.js.map