"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employer_1 = require("./employer");
class Cashier extends employer_1.Employer {
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
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map