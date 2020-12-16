import { UserEntity } from "src/modules/users/entities/user.entity";
import { WalletType } from "src/proto/wallet";
export declare class WalletEntity {
    uid: string;
    balance: number;
    owner: UserEntity;
    type: WalletType;
    secure: boolean;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
