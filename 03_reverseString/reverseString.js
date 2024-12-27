const reverseString = function(string) {
    let revString = "";
    for(let i=-1 ; i>= -string.length; i=i-1){
        revString += string.at(i);
    };
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
