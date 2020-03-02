export abstract class Employer {
  name: string
  salary: number

  static totalOfEmployee: number = 0

  constructor (
    name: string, 
    salary: number
  )

  {
    this.name = name
    this.salary = salary
    Employer.totalOfEmployee ++
  }

  abstract sayJob () :string
}