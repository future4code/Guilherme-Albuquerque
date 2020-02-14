"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const fs_1 = require("fs");
moment.locale('pt-br');
const pathAccountJson = './accountInfo.json';
new Promise((resolve, reject) => {
    fs_1.readFile(pathAccountJson, callBack);
    function callBack(err, data) {
        if (err) {
            reject(err);
        }
        else {
            resolve(data.toString());
        }
    }
}).then((data) => attAccounts(JSON.parse(data))).catch((err) => console.log(err));
const attAccounts = (acc) => {
    switch (process.argv[4]) {
        case "signUp":
            createNewAcc(acc, process.argv[5], process.argv[6], process.argv[7]);
            break;
    }
    console.log(attAccounts);
    fs_1.writeFileSync(pathAccountJson, JSON.stringify(acc));
};
function createNewAcc(acc, newName, newCpf, newDate) {
    acc.push({
        holder: {
            name: newName,
            cpf: newCpf,
            birthDate: moment(newDate, "DD/MM/YYYY"),
        },
        expenses: [],
        balance: 0,
    });
}
//# sourceMappingURL=index.js.map