import {employer} from './employer'
import {Dish} from './dish'

export class cashier extends employer {

  calculateBill (dishes: Dish []) {
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