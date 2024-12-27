const sumAll = function(arg1, arg2) {
    if (!(Number.isInteger(arg1) & Number.isInteger(arg2))) {
        return "ERROR";
    }else if (!(arg1>0 & arg2>0)){
        return "ERROR";
    }else if (arg1 >= arg2){
        let  cd = arg1-arg2+1;
        return arg2*cd+ (cd*(cd-1))/2;
    }else{
        let cd = arg2-arg1+1;
        return arg1*cd+ (cd*(cd-1))/2;
    }
};

// Do not edit below this line
module.exports = sumAll;
