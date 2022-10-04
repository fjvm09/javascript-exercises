const fibonacci = function(x) {
    if (x < 0){return "OOPS"}
    let firstPosition = 0
    let secondPosition = 0
    let result;
    for (let i = 1; i <= x; i++){
        sum = firstPosition + secondPosition;
        result = sum;
        firstPosition = secondPosition;
        secondPosition = sum
        if (firstPosition == 0 && secondPosition == 0){
            result = 1
            secondPosition = 1
        }
    } 
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
