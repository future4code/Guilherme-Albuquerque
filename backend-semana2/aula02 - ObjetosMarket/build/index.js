"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const cashier_1 = require("./cashier");
const chef_1 = require("./chef");
const brigadeiro = new dessert_1.Dessert("brigadeiro", 100, 20, ["leite condensado"], 100, 10);
const feijoada = new saltydish_1.SaltyDish("feijoada", 100, 20, ["leite condensado"], 100);
const tortaDeMaca = new dessert_1.Dessert("tortaDeMaca", 100, 20, ["Maçã"], 100, 10);
const arroz = new saltydish_1.SaltyDish("arroz", 100, 20, ["alho"], 100);
exports.pratos = [brigadeiro, feijoada, arroz, tortaDeMaca];
const guilherme = new cashier_1.Cashier("Guilherme", 1500);
const Jacquin = new chef_1.Chef("Jacquin", 20000);
Jacquin.removeDishFromMenu("brigadeiro");
console.log(exports.pratos);
//# sourceMappingURL=index.js.map