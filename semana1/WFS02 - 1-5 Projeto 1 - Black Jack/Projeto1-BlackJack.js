import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao Blackjack ')
const carta = comprarCarta();
const carta2 = comprarCarta();

let texto1 = carta.texto
let texto2 = carta2.texto
let usuario = carta.valor
let comp = carta2.valor

if (confirm('Quer iniciar uma nova rodada?')){
  console.log ('Usuário - cartas:',texto1, '- pontuação',usuario)
  console.log ('Computador - cartas:',texto2, '- pontuação',comp)

  if (usuario > comp){
    console.log('O usuário ganhou! ♡♢♧♤ ')
  }

  else if (comp > usuario){
    console.log('O computador ganhou! ♡♢♧♤')
  }

  else{
    console.log('Deu empate! ♡♢♧♤') 
  }

}
else {
  console.log('O Jogo acabou')
}