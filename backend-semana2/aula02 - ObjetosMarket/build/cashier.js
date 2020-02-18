"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employer_1 = require("./employer");
class cashier extends employer_1.employer {
    calculateBill(dishes) {
        let total = 0;
        dishes.forEach(element => {
            total += element.price;
        });
        return (total);
    }
    sayJob() {
        return ("Cashier");
    }
}
exports.cashier = cashier;
//# sourceMappingURL=cashier.js.map