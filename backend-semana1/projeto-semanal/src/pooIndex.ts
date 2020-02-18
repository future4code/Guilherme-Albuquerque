import { readFileSync, writeFileSync } from 'fs';

class JSONFileManager {
  static getObjectFromFile() {
      try {
          const accounts = JSON.parse(readFileSync("./accountInfo.json").toString())
          return accounts;
      } catch(error) {
          console.error(error)
          return error;
      }
  }
    static writeObject (accounts: string) {
      try{
        writeFileSync("./accountInfo.json", JSON.stringify(accounts))
      } catch(error){
        console.error(error)
      }
    }
  }

let accounts = JSONFileManager.getObjectFromFile()

class Bank {

    accounts: any
    fileManager: JSONFileManager

    constructor () {
      this.accounts = []
      this.fileManager = new JSONFileManager
    }

    getAllAccount () {
      this.accounts = JSONFileManager.getObjectFromFile()
    }

    createAccount () {
      this.accounts.push()
    }
  }

  class Transaction {
    value: number
    cpf: string
    description: string
  }

  class UserAccount {
    balance: number
    cpf: string
    name: string  
    age: number
    transactions: Transaction[]
  }

  const nuBank = new Bank

  nuBank.getAllAccount()

