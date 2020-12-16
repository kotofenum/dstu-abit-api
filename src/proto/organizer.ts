import { User } from "./user";
import { Wallet } from "./wallet";

export interface Organizer {
  uid: string;
  owner: User;
  isPublic: boolean;
  isProfessional: boolean;
  wallets: Wallet[];
}