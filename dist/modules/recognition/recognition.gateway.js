"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecognitionGateway = exports.predictExercise = exports.calculateParabola = exports.pointsOfInterest = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const user_exercises_service_1 = require("../user-exercises/user-exercises.service");
const frames = {};
const connected = {};
exports.pointsOfInterest = [
    "nose",
    "leftHip",
    "rightHip",
    "leftKnee",
    "rightKnee",
    "leftAnkle",
    "rightAnkle",
];
function calculateParabola(data, max, step = 1) {
    const maxIndex = data.indexOf(max);
    const x1 = maxIndex;
    const y1 = max;
    const x2 = maxIndex - step;
    const y2 = data[x2];
    const x3 = maxIndex + step;
    const y3 = data[x3];
    if (!x1 || !x2 || !x3 || !y1 || !y2 || !y3) {
        return null;
    }
    const f = (x) => {
        const a = (y3 - (x3 * (y2 - y1) + x2 * y1 - x1 * y2) / (x2 - x1)) /
            (x3 * (x3 - x1 - x2) + x1 * x2);
        const b = (y2 - y1) / (x2 - x1) - a * (x1 + x2);
        const c = (x2 * y1 - x1 * y2) / (x2 - x1) + a * x1 * x2;
        return a * Math.pow(x, 2) + b * x + c;
    };
    const min = Math.min(y1, y2, y3);
    const spread = max - min;
    return {
        f,
        spread,
        left: { x: x2, y: y2 },
        right: { x: x3, y: y3 },
    };
}
exports.calculateParabola = calculateParabola;
function predictExercise(frames) {
    if (!frames || !frames.length) {
        return null;
    }
    const data = frames.map((f) => f.nose);
    const lowestPoints = frames.map((f) => f.leftKnee);
    if (!lowestPoints.length) {
        throw new Error("Prediction could not be done, cause lack of lowest points");
    }
    if (!data.length) {
        return null;
    }
    const max = Math.max(...data);
    let step = 1;
    let result = null;
    let prevParabola = null;
    let currentParabola = calculateParabola(data, max, step);
    while (currentParabola) {
        if (result) {
            break;
        }
        if (prevParabola) {
            const leftX = currentParabola.left.x;
            const rightX = currentParabola.right.x;
            const leftY = currentParabola.left.y;
            const rightY = currentParabola.right.y;
            const diffLeft = prevParabola.left.y - leftY;
            const diffRIght = prevParabola.right.y - rightY;
            const sceletonHeight = lowestPoints[leftX] - leftY;
            const confindence = sceletonHeight / 3;
            const frameSpread = currentParabola.spread;
            if ((diffLeft < 0 || diffRIght < 0) && frameSpread > confindence) {
                result = {
                    step: {
                        number: step,
                        spread: currentParabola.spread,
                    },
                    left: {
                        x: leftX,
                        y: leftY,
                    },
                    right: {
                        x: rightX,
                        y: rightY,
                    },
                };
                break;
            }
        }
        step++;
        prevParabola = currentParabola;
        currentParabola = calculateParabola(data, max, step);
    }
    return result;
}
exports.predictExercise = predictExercise;
let RecognitionGateway = class RecognitionGateway {
    constructor(userExercisesService) {
        this.userExercisesService = userExercisesService;
    }
    async registerUser(client, data) {
        if (!data.trainId || !data.exerciseId || !data.frame) {
            return null;
        }
        const maxFramesLength = 14;
        const userFrames = frames[client.id];
        const len = userFrames.push(data.frame);
        if (len > maxFramesLength) {
            frames[client.id] = frames[client.id].slice(1);
        }
        const { trainId, exerciseId, frame } = data;
        const prediction = predictExercise(frames[client.id]);
        if (prediction) {
            console.log(prediction);
            frames[client.id] = frames[client.id].slice(prediction.right.x);
            const userExercise = await this.userExercisesService.updateExerciseProgress(exerciseId, trainId);
            console.log("======== SCORE: ", userExercise.score);
            return { result: userExercise.score };
            return null;
        }
        return null;
    }
    async storeFrame(client, data) {
        console.log(data);
        if (!data.trainId || !data.exerciseId || !data.frame) {
            return null;
        }
        const maxFramesLength = 14;
        const userFrames = frames[client.id];
        const len = userFrames.push(data.frame);
        if (len > maxFramesLength) {
            frames[client.id] = frames[client.id].slice(1);
        }
        const { trainId, exerciseId, frame } = data;
    }
    async finishExercise(client, data) {
        if (!data.exerciseId) {
            throw new common_1.BadRequestException("Exercise id is not defined");
        }
    }
    async finishTraining(client, data) {
        if (!data.trainId) {
            throw new common_1.BadRequestException("Train id is not defined");
        }
    }
    async handleConnection(socket) {
        try {
            console.log(socket.handshake.query);
            const trainId = socket.handshake.query.trainId;
            if (!trainId) {
            }
            frames[socket.id] = [];
        }
        catch (err) {
            socket.disconnect(err);
        }
    }
    async handleDisconnect(socket) {
        delete frames[socket.id];
        delete connected[socket.id];
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], RecognitionGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage("frame"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Client !== "undefined" && socket_io_1.Client) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], RecognitionGateway.prototype, "registerUser", null);
__decorate([
    websockets_1.SubscribeMessage("storeFrame"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Client !== "undefined" && socket_io_1.Client) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], RecognitionGateway.prototype, "storeFrame", null);
__decorate([
    websockets_1.SubscribeMessage("finish-exercise"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Client !== "undefined" && socket_io_1.Client) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], RecognitionGateway.prototype, "finishExercise", null);
__decorate([
    websockets_1.SubscribeMessage("finish"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Client !== "undefined" && socket_io_1.Client) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], RecognitionGateway.prototype, "finishTraining", null);
RecognitionGateway = __decorate([
    websockets_1.WebSocketGateway(),
    __metadata("design:paramtypes", [user_exercises_service_1.UserExercisesService])
], RecognitionGateway);
exports.RecognitionGateway = RecognitionGateway;
//# sourceMappingURL=recognition.gateway.js.map