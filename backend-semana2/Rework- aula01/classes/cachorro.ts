export class Cachorro {
  nome: string
  peso: number

  latir (): void {
    console.log('Au au')
  }

  comer (quantidade: number): void {
    this.peso += quantidade 
  }
}