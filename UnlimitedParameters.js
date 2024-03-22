function unlimitedParameters() {
    let sum = 0;
    for (i=0; i<arguments.length; i++) {    //"arguments" keyword.
        sum += arguments[i];
    }
    return sum ;
}

let result = unlimitedParameters(1,2,3,4,5);
console.log(result);