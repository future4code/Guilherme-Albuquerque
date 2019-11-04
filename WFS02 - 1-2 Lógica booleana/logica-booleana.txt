/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 */

/* a = false
     b = false
     c = true
     d = false
     e = boolean

/**
 * EXERCÍCIO 2
 * 
 *  a = Array é um conjunto de dados guardado dentro de uma variavel. 
 *      Declaramos array com abertura e fechamento de []
 * 
 *  b = O index inicial de um array sempre é array[0]
 * 
 *  c = O tamanho de um array pode ser determinado com array.length
 * 
 *  d = (I. undefined)
 *      (II. null)
 *      (III. 11)
 *      (IV. 3 e 4)
 *      (V. 19 e 10)
 *      (VI. 3)
 *      (VII. 1)
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 */
// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
/*let fahren = 77;
let conversaoKel = ((fahren - 32) * 5) / 9 + 273.15;
console.log("// a. 77° Fahrenheit convertido para Kelvin " + conversaoKel);

// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
let celcius = 80;
let conversaoF = (celcius * 9) / 5 + 32;
console.log("// b. 80° Celcius convertido para Fahrenheit " + conversaoF+ "°");

// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
celcius = 30;
conversaoF = (celcius * 9) / 5 + 32;
let conversaoCtoK= celcius + 273.15
console.log("// c. 30° Celcius convertido para Fahrenheit " + conversaoF+ "° 30° Celcius convertido para Kelvin "+ conversaoCtoK)

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
celcius = Number(prompt('Digite os graus em celcius'));
conversaoF = (celcius * 9) / 5 + 32;
conversaoCtoK= celcius + 273.15
console.log("// d. "+ celcius+ " Celcius convertido para Fahrenheit " + conversaoF+ "° 30° Celcius convertido para Kelvin "+ conversaoCtoK)
*/
// Exercício 2

//2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte)

/*const perg1 = "Qual é o seu endereço? ";
const endereco = prompt(perg1);
console.log("1." + perg1);
console.log("Resposta: " + endereco);

const perg2 = "Qual a sua comida favorita? ";
const comidaFav = prompt(perg2);
console.log("2." + perg2);
console.log("Resposta: " + comidaFav);

const perg3 = "Prefere Linux Ou Windows? ";
const prefere = prompt(perg3);
console.log("3." + perg3);
console.log("Resposta: " + prefere);

const perg4 = "Você prefere frio ou calor? ";
const tempo = prompt(perg4);
console.log("4." + perg4);
console.log("Resposta: " + tempo);

const perg5 = "O que está no seu CTRL + V ? ";
const ctrl = prompt(perg5);
console.log("5." + perg5);
console.log("Resposta: " + ctrl);
*/

let salario = Number(prompt("Qual valor do salário minimo atualmente?: "));
let qwh = salario / 5;

//a. Calcule e mostre o valor de cada quilowatt-hora, considerando o atual valor do salário mínimo;
console.log(
  "Considerando o valor do salário mínimo o valor  de cada quilowatt-hora é de: R$" +
    qwh
);

//b. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
let valorTotal = 280 * qwh;
console.log(
  "Com o gasto de 280 quilowatt-hora o valor a ser pago é de: R$" + valorTotal
);

/*c.Altere o programa para receber mais um valor: a porcentagem de desconto.
    Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.*/
let desc = (valorTotal * 15) / 100;
console.log(
  "Considerando os 15% de desconto, agora o valor a ser pago é de: R$" + desc
);
