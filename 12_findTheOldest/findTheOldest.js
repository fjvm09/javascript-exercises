const findTheOldest = function(array) {
    const oldest = array.sort((a, b) => {
        if (!a.yearOfDeath){a.yearOfDeath = (new Date().getFullYear())}
        if (!b.yearOfDeath){b.yearOfDeath = (new Date().getFullYear())}
        let aYears = a.yearOfDeath - a.yearOfBirth;
        let bYears = b.yearOfDeath - b.yearOfBirth;
        return aYears > bYears ? -1 : 1;
    }); console.log(oldest)
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
