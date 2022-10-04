const add = function(num1, num2) {
  if (isNaN(num1)) {num1 = parseInt(0)}
  if (isNaN(num2)) {num2 = parseInt(0)}
  let result = num1 + num2;
	return result
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(x) {
  let result = 0;
    for(let i = 0; i < x.length; i++){
      if (x[i] == false){
        result +=0
      } result += x[i]
    } return result;
};

const multiply = function(x) {
  let result = 1;
  for(let i = 0; i < x.length; i++){
    if (x[i] == false){
      result *=0
    } result *= x[i]
  } return result;
};

const power = function(x, y) {
	let result = 1;
  for (let i = 0; i < y; i++){
    result *= x
  } return result;
};

const factorial = function(x) {
  let result = 1;
  if (x == 0){
    result = 1;
  } else {
    for (let i = 1; i <= x; i++){
    result *= i;
  }} return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
