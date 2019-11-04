/**
 * Comece seu exercício aqui! :D
 */

// Exercícios de interpretação de código

// 1- Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"?
//   R:
//     Ele realiza um teste com o número digitado pelo usuário, Para números pares ele imprime Passou no teste, e para os números ímpares Não passou no teste


// 2 - Explique o que o código faz.
//   R:
//   a. Para que serve o código acima?
//       Ele define a fruta em questão, e atualiza a variavel preco

//   b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//       "O preço da fruta Maçã é R$ 2.25

//   c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
//       R$ 24.55


//   d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
//       ""O preço da fruta Pêra é R$5.00 "

// 3 - Explique o que o código faz.
//   R:
//   a. Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
//       Haverá um erro por que a variavel mensagem está definida dentro do scopo if
//       e não no scopo global.


// Exercícios de escrita de código.

/* 1. Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:

    a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais?

    b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais?

    c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente. */

  //a. 

  let n1 = Number(prompt("Digite um número: "));
  let n2 = Number(prompt("Digite um número: "));

  if (n2 > n1) {
    console.log(n2, n1)
  }
  else {
    console.log(n1, n2)
  }

  //se os dois números forem iguais ele ira imprimir os dois.

  //b.

  let num1 = Number(prompt("Digite um número: "));  
  let num2 = Number(prompt("Digite um número: "));
  let num3 = Number(prompt("Digite um número: "));

  if (num1 > num2 && num2> num3){
    console.log(num1, num2, num3)
  } 

  else if (num1 > num3 && num3 > num2) {
    console.log(num1, num3, num2)
  }

  else if (num2 > num1 && num1 > num3) {
    console.log(num2, num1, num3)
  }
  else if (num2 > num3 && num3 > num1) {
    console.log(num2, num3, num1)
  }

  else if (num3 > num1 && num1 > num2){
    console.log(num3, num1, num2)
  }

  else if (num3 > num2 && num2 > num1){
    console.log(num3, num2, num1)
  }

  else {
    console.log(num1, num2, num3)
  }

  //c.

  let v1 = Number(prompt("Digite um número: ")); 
  let v2 = Number(prompt("Digite um número: "));
  let v3 = Number(prompt("Digite um número: "));

  if (v1 > v2 && v2> v3){
    console.log(v1, v2, v3)
  } 

  else if (v1 > v3 && v3 > v2) {
    console.log(v1, v3, v2)
  }

  else if (v2 > v1 && v1 > v3) {
    console.log(v2, v1, v3)
  }
  else if (v2 > v3 && v3 > v1) {
    console.log(v2, v3, v1)
  }

  else if (v3 > v1 && v1 > v2){
    console.log(v3, v1, v2)
  }

  else if (v3 > v2 && v2 > v1){
    console.log(v3, v2, v1)
  }

  else {
    console.log('Por favor, insira números diferentes :D')
  }

//2 Vamos criar um programa que classifique os animais dados alguns critérios.
// Link para árvore: https://gyazo.com/5c22b87eeef1e11bc87bda1c872af07a


const tipo = prompt ('O animal possue ossos formando seu esqueleto? [s/n]')

if (tipo === 'n'){
  console.log ('O animal é invertebrado')
}

else {
  let pelos = prompt ('O animal tem pelos? [s/n]')
    if (pelos === 's'){
      let mamif = prompt ('Ele é um animal racional? [s/n]')
      if (mamif === 's'){
        console.log('Ele é um ser humano')
      }
      else{
        console.log('Mamífero não humano')
      }
    }
    else {
      let penas = prompt ('Tem penas? [s/n]')
      if (penas === 's'){
        console.log('É uma ave')
      }
      else {
        let terreste = prompt ('É terreste? [s/n]')
        if (terreste === 'n'){
          console.log ('É um peixe! :3')
        }
        else{
          let agua = prompt ('Passa parte da vida na água? [s/n]')
          if (agua === 's'){
            console.log('Ele é um anfibio')
          }
          else {
            console.log ('Ele é um reptil')
          }
        }
      }
    }

}

//3 Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

let nome = prompt ('Digite seu nome completo: ')
let tipoDeJogo = prompt ('Digite qual tipo de jogo, [IN] para internacional ou [DO] para jogos domésticos')
let etapa = prompt ('Qual etapa do jogo? [SF] para semi-final, [DT] para decisão terceiro lugar ou [FI] para a grande final')
let cat = prompt ('Qual categoria? [1, 2, 3 ou 4]')
let quant = prompt ('Qual a quantidade de ingressos?')

let preco = 0
let tipoDeJogo2 = 'Nacional'
let etapa2 = 'Semi-final'


if (tipoDeJogo === 'DO'){
    if (etapa === 'SF'){
        switch (cat){
          case '1':
            preco = 1320
            break;
          
          case '2':
            preco = 880.80
            break;

          case '3':
            preco = 550
            break;

          case '4':
            preco = 220
            break;

          default:
            console.log('Por favor digite uma categoria valida')
        }
    }
      else if (etapa === 'DT'){
        switch (cat){
          case '1':
            preco = 660
            break;
          
          case '2':
            preco = 440
            break;

          case '3':
            preco = 330
            break;

          case '4':
            preco = 170      
            break;

          default:
            console.log('Por favor digite uma categoria valida')
            break;
        }
        etapa2 = 'Decisão terceiro lugar'
      }
      else if (etapa === 'FI'){
        switch (cat){
          case '1':
            preco = 1980
            break;
          
          case '2':
            preco = 1320
            break;

          case '3':
            preco = 880
            break;

          case '4':
            preco = 330      
            break;

          default:
            console.log('Por favor digite uma categoria valida')
        }
        etapa2 = 'Grande final'
      }
     
      let total = quant * preco

      console.log ('---Dados da compra---')
      console.log ('Nome do cliente: ', nome)
      console.log ('Tipo do jogo: ', tipoDeJogo2)
      console.log ('Etapa do jogo: ', etapa2)
      console.log ('Categoria: ', cat)
      console.log ('Quantidade de ingressos: ', quant , 'ingressos')
      console.log ('---Valores---')
      console.log ('Valor do ingresso: R$', preco)
      console.log ('Valor total:  R$', total)

    
  }





if (tipoDeJogo==='IN'){
  tipoDeJogo2 = 'Internacional'
   if (etapa === 'SF'){
      switch (cat){
        case '1':
          preco = 321.95
          break;
        
        case '2':
          preco = 214.82
          break;

        case '3':
          preco = 134.14
          break;

        case '4':
          preco = 53.65
          break;

        default:
          console.log('Por favor digite uma categoria valida')
      }
  }
    else if (etapa === 'DT'){
      switch (cat){
        case '1':
          preco = 160.97
          break;
        
        case '2':
          preco = 107.31
          break;

        case '3':
          preco = 80.48
          break;

        case '4':
          preco = 41.46      
          break;

        default:
          console.log('Por favor digite uma categoria valida')
      }
      etapa2 = 'Decisão terceiro lugar'
    }
    else if (etapa === 'FI'){
      switch (cat){
        case '1':
          preco = 482.92
          break;
        
        case '2':
          preco = 321.95
          break;

        case '3':
          preco = 214.63
          break;

        case '4':
          preco = 80.48      
          break;

        default:
          console.log('Por favor digite uma categoria valida')
      }
        etapa2 = 'Grande final'
        let total = quant * preco
        console.log ('---Dados da compra---')
        console.log ('Nome do cliente: ', nome)
        console.log ('Tipo do jogo: ', tipoDeJogo2)
        console.log ('Etapa do jogo: ', etapa2)
        console.log ('Categoria: ', cat)
        console.log ('Quantidade de ingressos: ', quant , 'ingressos')
        console.log ('---Valores---')
        console.log ('Valor do ingresso: U$', preco)
        console.log ('Valor total:  U$', total)
    }
  

}