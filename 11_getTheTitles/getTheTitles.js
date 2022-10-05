const getTheTitles = function(array) {
    let newArray = []
    array.forEach(item => { 
        array.find(item => item.title !== null)
        newArray.push(item.title)
    }); return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
