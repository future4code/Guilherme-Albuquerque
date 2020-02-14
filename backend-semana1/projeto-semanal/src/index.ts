import * as moment from 'moment';
import {readFile, writeFileSync} from 'fs';
moment.locale('pt-br')

const pathAccountJson = './accountInfo.json'

type userAccount = {
  holder:{
    name: string,
    cpf: string,
    birthDate: any, 
},
  expenses: expense[],
  balance: number,
};

type expense = {
  value: string,
  description: string,
  date: string,
};



new Promise ((resolve, reject) => {
    readFile(pathAccountJson, callBack)
    function callBack(err: Error, data: Buffer){
      if (err){
        reject(err)
      }else{
        resolve(data.toString())
      }
    }
    }).then(
      (data: string) => attAccounts(JSON.parse(data))
    ).catch(
      (err) => console.log (err)
    )

    const attAccounts = (acc : userAccount[]) => {
      switch (process.argv[4]) {
        case "signUp":
          createNewAcc(
          acc,
          process.argv[5],
          process.argv[6],
          process.argv[7],
          )
          break;
      }
      console.log(attAccounts)
      writeFileSync(pathAccountJson, JSON.stringify(acc))
    }

    function createNewAcc(acc: userAccount[], newName: string, newCpf: string, newDate: string,) {
      acc.push({
          holder:{
            name: newName,
            cpf: newCpf,
            birthDate: moment(newDate, "DD/MM/YYYY"),
        },
          expenses: [],
          balance: 0,
        })
        
    }