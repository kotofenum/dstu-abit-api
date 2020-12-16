import { WalletEntity } from "./entities/wallet.entity";
import { Repository } from "typeorm";
import { WalletInput } from "./inputs/wallet.input";
import { UserEntity } from "../users/entities/user.entity";
export declare class WalletsService {
    private readonly walletsRepository;
    constructor(walletsRepository: Repository<WalletEntity>);
    createWallet(data: WalletInput, owner: UserEntity): Promise<WalletEntity>;
    getWallets(): Promise<WalletEntity[]>;
    getUserWallets(user: UserEntity): Promise<WalletEntity[]>;
    getWalletById(id: string): Promise<WalletEntity>;
}
