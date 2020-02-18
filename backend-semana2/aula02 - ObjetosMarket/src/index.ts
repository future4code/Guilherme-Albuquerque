import {Dessert} from './dessert'
import {Dish} from './dish'
import {SaltyDish} from './saltydish'
import {Cashier} from './cashier'
import {Chef} from './chef'


const brigadeiro = new Dessert("brigadeiro",100, 20, ["leite condensado"], 100, 10);
const feijoada = new SaltyDish("feijoada",100, 20, ["leite condensado"], 100);
const tortaDeMaca = new Dessert("tortaDeMaca",100, 20, ["Maçã"], 100, 10);
const arroz = new SaltyDish("arroz",100, 20, ["alho"], 100);

export const pratos = [brigadeiro, feijoada, arroz, tortaDeMaca]

const guilherme = new Cashier ("Guilherme", 1500)

const Jacquin = new Chef ("Jacquin", 20000)

Jacquin.removeDishFromMenu("brigadeiro")

console.log(pratos)

