import {UserInte} from './user'

class Student implements User {
  name: string
  mail: string
  dateOfBirth: string

  constructor (name: string, mail: string, dateOfBirth: string){
    this.name = name
    this.mail = mail
    this.dateOfBirth = dateOfBirth
  }
}