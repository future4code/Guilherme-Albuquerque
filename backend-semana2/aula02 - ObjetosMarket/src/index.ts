import {Dessert} from './dessert'
import {Dish} from './dish'
import {SaltyDish} from './saltydish'
import {cashier} from './cashier'


const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
const feijoada = new SaltyDish(100, 20, ["leite condensado"], 100);
const tortaDeMaca = new Dessert(100, 20, ["Maçã"], 100, 10);
const arroz = new SaltyDish(100, 20, ["alho"], 100);

const pratos = [brigadeiro, feijoada, arroz, tortaDeMaca]

const guilherme = new cashier ("Guilherme", 1500)

console.log(guilherme.calculateBill(pratos))

