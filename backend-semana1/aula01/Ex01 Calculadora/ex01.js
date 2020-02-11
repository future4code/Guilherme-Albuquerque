const mathOperator = process.argv[2];
const numA = process.argv[3];
const numB = process.argv[4];

switch (mathOperator) {
  case 'add':
    console.log((+numA) + (+numB))
    break;
  
  case 'sub':
    console.log((+numA) - (+numB))
    break;
  case 'mult':
    console.log((+numA) * (+numB))
    break;

  case 'div':
    //</div>
    console.log((+numA) / (+numB))
    break;

  default: 
    console.log("Error, sorry :~")
}
  