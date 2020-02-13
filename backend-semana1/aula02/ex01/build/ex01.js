let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function numberState(arrayNum) {
    let sumOfNumbers = 0;
    arrayNum.forEach(element => {
        sumOfNumbers += element;
    });
    const response = {
        numberOfItems: arrayNum.length,
        oddNumbers: numbersArray.filter((number) => number % 2 === 1).length,
        sumOfNumbers: sumOfNumbers,
    };
    return ({
        response
    });
}
console.log(typeof numbersArray);
console.log(numberState(numbersArray));
//# sourceMappingURL=ex01.js.map