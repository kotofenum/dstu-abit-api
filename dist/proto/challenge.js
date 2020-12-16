"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FundingRule;
(function (FundingRule) {
    FundingRule[FundingRule["daily"] = 0] = "daily";
    FundingRule[FundingRule["weekly"] = 1] = "weekly";
    FundingRule[FundingRule["monthly"] = 2] = "monthly";
    FundingRule[FundingRule["finale"] = 3] = "finale";
})(FundingRule || (FundingRule = {}));
var MultiplierMode;
(function (MultiplierMode) {
    MultiplierMode[MultiplierMode["fixed"] = 0] = "fixed";
    MultiplierMode[MultiplierMode["personalProgressive"] = 1] = "personalProgressive";
    MultiplierMode[MultiplierMode["publicRegressiveFixed"] = 2] = "publicRegressiveFixed";
})(MultiplierMode || (MultiplierMode = {}));
var ExerciseKey;
(function (ExerciseKey) {
    ExerciseKey["squats"] = "squats";
    ExerciseKey["pushUps"] = "push_ups";
    ExerciseKey["plank"] = "plank";
    ExerciseKey["jumpingJacks"] = "jumping_jacks";
})(ExerciseKey || (ExerciseKey = {}));
var ExerciseType;
(function (ExerciseType) {
    ExerciseType["detection"] = "detection";
    ExerciseType["timer"] = "timer";
})(ExerciseType || (ExerciseType = {}));
//# sourceMappingURL=challenge.js.map