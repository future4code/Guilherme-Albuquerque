//### Enunciado

//**Exercícios de interpretação de código**

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console? 
  //R: Com um loop até o 10 o for está incrementando a variavel i de 1 em 1, e adicionando na variavel sum.
  //o valor impresso no console será : 55

//2.
  //a. O que o comando .push` faz?
  //R: adiciona um novo item a um array

  //b. Qual o valor impresso no console?
  //R: [10.15,20,25,30]

  //c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
  //R: numero = 3 [12,15,18,27,30]
  //R: numero = 4 [12, 20]

//3. Desafio:
//Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
/*R: "0"
     "00"
     "000"
     "0000"
*/
//Exercícios de escrita de código
//Exercícios 4.


//.a Escreva um programa que devolva o maior e o menor números contidos no array original.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = array[0]
// let menor = array[0]

// for (const elemento of array){
//   if (elemento > maior){
//     maior = elemento
//   }

//   else if (elemento < menor){
//     menor = elemento
//   }
// }
// console.log('O maior número é: '+ maior+ ' e o menor número é: '+ menor)

//b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

// const arrayB = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let newArray = []

// for (const item of arrayB){
//   newArray.push(item/10)
// }

// console.log(newArray)

//c. Escreva um programa que devolva um novo array contendo, somente, os números ímpares do array original

// const arrayC = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let newArrayC = []

// for (const num of arrayC){
//   if (num % 2 === 1){
//     newArrayC.push(num)
//   }
// }

// console.log(newArrayC)

//d. Escreva um programa que um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

// const arrayD = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let newArrayD = []

// for (let itens = 0; itens < arrayD.length; itens ++){
//  newArrayD.push('O elemento do index '+ itens+ ' e '+ arrayD[itens])
// }


// console.log(newArrayD)

//Desafio Exercicio 5

// const numEscolhido = Number(prompt('Digite um número secreto: '))
// console.log ('Lets play')
// let chute 
// let cont = 0

// while (chute !== numEscolhido){
//   chute = Number(prompt('Digite seu chute: '))
//   console.log('O número chutado foi: ', chute)
//   if (chute > numEscolhido){
//     console.log('Errou. O número secreto é menor que o chutado')
//   }
//   else if (chute < numEscolhido){
//     console.log('Errou. O número secreto é maior que o chutado')
//   }

//   cont = cont + 1

// }

// console.log('Parabéns você acertou.')
// console.log('O número de tentativas foi de', cont)

//Desafio Exercicio 6


// const numEscolhido = Math.floor(Math.random() * 100)
// console.log (numEscolhido)
// let chute 
// let cont = 0

// while (chute !== numEscolhido){
//   chute = Number(prompt('Digite seu chute: '))
//   console.log('O número chutado foi: ', chute)
//   if (chute > numEscolhido){
//     console.log('Errou. O número secreto é menor que o chutado')
//   }
//   else if (chute < numEscolhido){
//     console.log('Errou. O número secreto é maior que o chutado')
//   }

//   cont = cont + 1

// }

// console.log('Parabéns você acertou.')
// console.log('O número de tentativas foi de', cont)

//Foi relativamente fácil de realizar a alteração, mas eu precisei transformar o random em um número inteiro, ai veio o Math.floor 

