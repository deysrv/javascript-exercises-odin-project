const findTheOldest = function(peopleDetails) {

    peopleDetails.sort((a,b)=>{
        const today = new Date()
        const ageA = a.yearOfBirth -(a.yearOfDeath || today.getFullYear());
        const ageB = b.yearOfBirth-(b.yearOfDeath || today.getFullYear());
        return ageB - ageA;
    })
    const oldestPerson = peopleDetails.at(-1)

    console.log(peopleDetails)   
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
