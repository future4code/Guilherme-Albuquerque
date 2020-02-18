"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const cashier_1 = require("./cashier");
const brigadeiro = new dessert_1.Dessert(100, 20, ["leite condensado"], 100, 10);
const feijoada = new saltydish_1.SaltyDish(100, 20, ["leite condensado"], 100);
const tortaDeMaca = new dessert_1.Dessert(100, 20, ["Maçã"], 100, 10);
const arroz = new saltydish_1.SaltyDish(100, 20, ["alho"], 100);
const pratos = [brigadeiro, feijoada, arroz, tortaDeMaca];
const guilherme = new cashier_1.cashier("Guilherme", 1500);
console.log(guilherme.calculateBill(pratos));
//# sourceMappingURL=index.js.map