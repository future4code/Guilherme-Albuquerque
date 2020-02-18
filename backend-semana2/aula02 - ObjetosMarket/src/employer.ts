export abstract class employer {
  name: string
  salary: number

  constructor (
    name: string,
    salary: number
  )

  {
    this.name = name
    this.salary = salary
  }

  abstract sayJob () :string
}