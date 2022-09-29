const leapYears = function(year) {
    let result;
    if  (year % 100 == 0){
        result = (year % 400 == 0)
        return result;
    } else {
        result = (year % 4 == 0)
        return result;
    }
};

// Do not edit below this line
module.exports = leapYears;
