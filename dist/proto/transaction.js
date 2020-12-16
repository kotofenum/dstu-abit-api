"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionPurpose;
(function (TransactionPurpose) {
    TransactionPurpose[TransactionPurpose["transferFundsToWallet"] = 0] = "transferFundsToWallet";
    TransactionPurpose[TransactionPurpose["debitFundsFromWallet"] = 1] = "debitFundsFromWallet";
    TransactionPurpose[TransactionPurpose["winningsPayout"] = 2] = "winningsPayout";
    TransactionPurpose[TransactionPurpose["enrollmentPayment"] = 3] = "enrollmentPayment";
    TransactionPurpose[TransactionPurpose["transferForDistribution"] = 4] = "transferForDistribution";
    TransactionPurpose[TransactionPurpose["other"] = 5] = "other";
})(TransactionPurpose || (TransactionPurpose = {}));
//# sourceMappingURL=transaction.js.map