import { WalletEntity } from "./entities/wallet.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WalletInput } from "./inputs/wallet.input";
import { UserEntity } from "../users/entities/user.entity";
import { WalletType } from "src/proto/wallet";

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(WalletEntity)
    private readonly walletsRepository: Repository<WalletEntity>
  ) {}

  async createWallet(
    data: WalletInput,
    owner: UserEntity
  ): Promise<WalletEntity> {
    return await this.walletsRepository.save({
      owner: owner,
      balance: 0,
      type: WalletType.personal,
      secure: false,
    });
  }

  async getWallets(): Promise<WalletEntity[]> {
    return await this.walletsRepository.find();
  }
  
  async getUserWallets(user: UserEntity): Promise<WalletEntity[]> {
    return await this.walletsRepository.find({ owner: user });
  }

  async getWalletById(id: string): Promise<WalletEntity> {
    return await this.walletsRepository.findOne(id);
  }
}
