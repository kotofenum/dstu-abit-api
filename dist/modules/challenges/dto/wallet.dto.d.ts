import { UserDto } from 'src/modules/users/dto/user.dto';
import { WalletType } from 'src/proto/wallet';
export declare class WalletDto {
    readonly uid: string;
    readonly balance: number;
    readonly owner: UserDto;
    readonly type: WalletType;
    readonly secure: boolean;
}
