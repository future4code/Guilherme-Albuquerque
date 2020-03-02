import {Employer} from './employer'
import {Dish} from './dish'

export class Cashier extends Employer {

  calculateBill (dishes: Dish []): number {
    let total = 0
    dishes.forEach(element => {
      total += element.price
    })
    return (total)
  }

  sayJob (){
    return(
      "Cashier"
    )
  }

}