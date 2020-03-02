"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class FileManager {
    static getObjectFromFile() {
        try {
            const accounts = JSON.parse(fs_1.readFileSync("./accountInfo.json").toString());
            return accounts;
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    static writeObject(accounts) {
        try {
            fs_1.writeFileSync("./accountInfo.json", JSON.stringify(accounts));
        }
        catch (error) {
            console.error(error);
        }
    }
}
let accounts = FileManager.getObjectFromFile();
accounts.push("Hello Dev");
console.log(accounts);
FileManager.writeObject(accounts);
//# sourceMappingURL=pooIndex.js.map