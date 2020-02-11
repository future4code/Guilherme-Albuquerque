const fs = require('fs');
const fileName = process.argv[2];
const newTask = process.argv[3];

try {
  fs.appendFileSync(fileName,"\n" + newTask, 'utf8');
  console.log("Arquivo criado com sucesso");

}catch(err) {
  console.error(err)
}