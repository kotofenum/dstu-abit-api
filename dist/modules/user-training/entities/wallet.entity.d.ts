import { TransactionEntity } from "src/modules/transactions/entities/transaction.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { WalletType } from "src/proto/wallet";
export declare class WalletEntity {
    uid: string;
    balance: number;
    owner: UserEntity;
    type: WalletType;
    secure: boolean;
    outgoing: TransactionEntity[];
    incoming: TransactionEntity[];
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
