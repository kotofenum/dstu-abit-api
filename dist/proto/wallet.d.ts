export declare enum WalletType {
    personal = 0,
    corporate = 1,
    challenge = 2,
    heap = 3,
    system = 4
}
export interface Wallet {
    uid: string;
    balance: number;
    owner: string;
    type: WalletType;
    secure: boolean;
}
