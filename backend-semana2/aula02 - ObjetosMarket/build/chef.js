"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employer_1 = require("./employer");
const index_1 = require("./index");
class Chef extends employer_1.Employer {
    removeDishFromMenu(dishName) {
        for (let i = 0; i < index_1.pratos.length; i++) {
            if (index_1.pratos[0].name === dishName) {
                index_1.pratos.splice(i, 1);
            }
        }
    }
    sayJob() {
        return ("Chef de cozinha");
    }
}
exports.Chef = Chef;
//# sourceMappingURL=chef.js.map