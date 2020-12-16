import { User } from "./user";
export interface Subscription {
    uid: string;
    plan: number;
    user: User;
    startedAt: Date;
    updatedAt: Date;
    expiresAt: Date;
}
