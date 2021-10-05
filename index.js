let num1 = 10;
let num2 = 50;

function add(num1, num2){
return (num1 + num2)
}

function increment(num){
return (num+=1)
}

function decrement(num){
return (num-=1)
}


function subtract(num1, num2){
return (num1 - num2)
}

function multiply(num1, num2){
return (num1 * num2)
}



function divide(num1, num2){
return (num1 / num2)
}

function makeInt(n){
    let parsedInt = parseInt(n,10)
    return parsedInt
}

function preserveDecimal(n){
    return parseFloat(n)
}