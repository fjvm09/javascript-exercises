const palindromes = function (string) {
    let array = string.toLowerCase().split("");
    console.log(array)
    let arrayFiltered = array.filter((x) => x !== '!')
    let arrayFiltered1 = arrayFiltered.filter((x) => x !== ',')
    let arrayFiltered2 = arrayFiltered1.filter((x) => x !== '.')
    let arrayFiltered3 = arrayFiltered2.filter((x) => x !== ' ')
    console.log(arrayFiltered3)
    let stringFiltered = arrayFiltered3.join("");
    let stringReversed = arrayFiltered3.reverse().join("");
    if (stringFiltered == stringReversed){
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;
