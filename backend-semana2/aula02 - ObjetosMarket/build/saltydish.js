"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(name, price, cost, ingredients, timeToCook) {
        super(name, price, cost, ingredients, timeToCook);
    }
    cook() {
    }
}
exports.SaltyDish = SaltyDish;
//# sourceMappingURL=saltydish.js.map