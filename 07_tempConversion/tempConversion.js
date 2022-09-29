const ftoc = function(temp) { 
  return Math.round(((temp -32)*5/9)*10.0)/10.0;
};

const ctof = function(temp) {
  return Math.round(((temp*9/5)+32)*10.0)/10.0;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
