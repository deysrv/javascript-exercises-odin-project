const fibonacci = function(n) {
    const intNumber = Number(n);

    if(intNumber <0){

        return "OOPS";
    }else if(intNumber === 0 || intNumber === 1){
        return intNumber;
    }else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
