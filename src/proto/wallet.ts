export enum WalletType {
  personal,
  corporate,
  challenge,
  heap,
  system
}

export interface Wallet {
  uid: string;
  balance: number;
  owner: string;
  type: WalletType;
  secure: boolean;
}