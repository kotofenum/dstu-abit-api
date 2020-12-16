import { CodeEntity } from "./entities/code.entity";
import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CodeInput } from "./inputs/code.input";
import { UserEntity } from "../users/entities/user.entity";
import { ConfirmCodeInput } from "./inputs/confirm-code.input";
import { AuthService } from "../auth/auth.service";
import { UsersService } from "../users/users.service";
import { LoginInput } from "./inputs/login.input";

const cryptoRandomString = require("crypto-random-string");

@Injectable()
export class CodesService {
  constructor(
    @InjectRepository(CodeEntity)
    private readonly codesRepository: Repository<CodeEntity>,
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly httpService: HttpService
  ) {}

  async createCode(data: CodeInput, user: UserEntity): Promise<CodeEntity> {
    const code = cryptoRandomString({ length: 5, type: "numeric" });
    console.log(code);
    // await this.sendCodeViaSMS(data.phone, code);

    return await this.codesRepository.save({
      phone: data.phone,
      code: code,
      expireAt: new Date(new Date().getTime() + 5 * 60000),
      issuer: user,
    });
  }

  async confirmCode(
    data: ConfirmCodeInput
  ): Promise<{ access_token: string | null }> {
    const codes = await this.codesRepository.find({
      where: { phone: data.phone, code: data.code },
    });

    if (codes.some((code) => code.expireAt.getTime() > new Date().getTime())) {
      const user = await this.usersService.getUserByPhone(data.phone);

      await this.usersService.confirmUser(user);

      return this.authService.login(user);
    } else {
      return { access_token: null };
    }
  }

  async login(data: LoginInput): Promise<{ access_token: string | null }> {
    const user = await this.usersService.getUserByPhone(data.phone);

    if (user && user.pwd && data.password && user.pwd === data.password) {
      return this.authService.login(user);
    } else {
      return { access_token: null };
    }
  }

  // async getCodes(): Promise<CodeEntity[]> {
  //   return await this.codesRepository.find();
  // }
  // //
  //   async checkCodeValidity(phone: string, code: string): Promise<boolean> {
  //     const codes = await this.codesRepository.find({ where: { phone, code } });

  //     return codes.some((code) => code.expireAt < new Date());
  //   }

  async getLastCodeForPhone(phone: string): Promise<CodeEntity> {
    const last = await this.codesRepository.findOne({
      where: { phone: phone },
      order: { dateCreated: "DESC" },
    });

    return last;
  }

  async getCodeById(id: string): Promise<CodeEntity> {
    return await this.codesRepository.findOne(id);
  }

  async getCodesByIds(ids: string[]): Promise<CodeEntity[]> {
    return await this.codesRepository.findByIds(ids);
  }

  async sendCodeViaSMS(phone: string, code: string): Promise<boolean> {
    // return await this.codesRepository.findByIds(ids);

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
      .get<any>(apiUrl, {
        params: dto,
        // paramsSerializer: (params) => qs.stringify(params, { format: 'RFC3986' })
      })
      .toPromise();

    console.log(response.data);
    return response.data;
  }
}
