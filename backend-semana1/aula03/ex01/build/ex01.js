const path = require("path");
const fs = require("fs");
const directoryPath = "./textos";
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        console.log(err);
    }
    else {
        files.forEach(function (eachFile) {
            fs.readFile(eachFile);
        });
    }
});
//# sourceMappingURL=ex01.js.map