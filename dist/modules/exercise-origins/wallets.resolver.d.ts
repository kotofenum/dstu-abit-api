import { WalletsService } from "./wallets.service";
import { WalletDto } from "./dto/wallet.dto";
import { UserEntity } from "../users/entities/user.entity";
export declare class WalletsResolver {
    private readonly walletsService;
    constructor(walletsService: WalletsService);
    wallets(): Promise<WalletDto[]>;
    myWallets(user: UserEntity): Promise<WalletDto[]>;
    wallet(uid: string): Promise<WalletDto>;
    addWallet(user: UserEntity): Promise<WalletDto>;
}
