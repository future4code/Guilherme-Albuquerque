let numbersArray: number[] = [1,2,3,4,5,6,7,8,9,10]

type data = {
  numberOfItems: number,
  oddNumbers: number,
  sumOfNumbers: number,
}

function numberState (arrayNum: number[]) {
    let sumOfNumbers = 0
    arrayNum.forEach(element => {
      sumOfNumbers += element
    });

    const response: data = {
      numberOfItems: arrayNum.length,
      oddNumbers: numbersArray.filter((number) => number % 2 === 1).length,
      sumOfNumbers: sumOfNumbers,
    }

    return ({
      response
    })
}

console.log(numberState(numbersArray))