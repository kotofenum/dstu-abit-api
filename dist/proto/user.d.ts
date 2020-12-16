import { Wallet } from "./wallet";
export interface User {
    uid: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    picture: string;
    wallets: Wallet[];
}
