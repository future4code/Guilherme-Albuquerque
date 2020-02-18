import {Employer} from './employer'
import {pratos} from './index'

export class Chef extends Employer {
  
  removeDishFromMenu(dishName: string){
      
      for (let i = 0; i < pratos.length; i++){
        if (pratos[0].name === dishName){
          pratos.splice(i, 1)
        }
      }

  }

  sayJob() {
    return(
      "Chef de cozinha"
    )
  }
}