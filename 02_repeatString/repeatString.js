const repeatString = function(string, num) {
    let output = ''
    //let output;
    if (num < 0){ 
        output = 'ERROR'; 
        return output;
    } else {
        for(let i = 0; i < num; i++){
        output += `${string}`;
        } return output;
    }
}

// Do not edit below this line
module.exports = repeatString;
