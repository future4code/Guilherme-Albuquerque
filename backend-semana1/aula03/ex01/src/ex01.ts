const path = require("path")
const fs = require("fs")
 
const directoryPath = "./textos"
 
fs.readdir(directoryPath, function(err : Error, files: Buffer) {
  if (err) {
    console.log(err)
  } else {
    files.forEach(function(eachFile) {
      fs.readFile(eachFile)
    })
  }
})