const palindromes = function (string) {
    const revArray = [];
    const originalArray =[]
    for(let i =-1; i>= -string.length; i--){
        if (!["!"," ",".",","].includes(string.at(i))){
            revArray.push(string.at(i).toLowerCase());
        }
        if (!["!"," ",".",","].includes(string.at(-i-1))){
            originalArray.push(string.at(-i-1).toLowerCase())
        }
        
    }
    const revString = revArray.reduce((a,b)=>{
        return a+b;
    },"")

    const originalString = originalArray.reduce((a,b)=>{
        return a+b;
    },"")

    console.log(`string: ${originalString},reverse: ${revString}`);

    if(originalString === revString){

        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
