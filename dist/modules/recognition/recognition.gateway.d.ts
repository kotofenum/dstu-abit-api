import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Client, Server } from "socket.io";
import { UserExercisesService } from "../user-exercises/user-exercises.service";
export declare const pointsOfInterest: string[];
export declare function calculateParabola(data: any, max: any, step?: number): {
    f: (x: any) => number;
    spread: number;
    left: {
        x: number;
        y: any;
    };
    right: {
        x: any;
        y: any;
    };
};
export declare function predictExercise(frames: any): any;
export declare class RecognitionGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly userExercisesService;
    server: Server;
    constructor(userExercisesService: UserExercisesService);
    registerUser(client: Client, data: any): Promise<any>;
    storeFrame(client: Client, data: any): Promise<any>;
    finishExercise(client: Client, data: any): Promise<any>;
    finishTraining(client: Client, data: any): Promise<any>;
    handleConnection(socket: any): Promise<void>;
    handleDisconnect(socket: any): Promise<void>;
}
