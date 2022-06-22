/* Simple js calculator */

/* Take operation choice from user */ 

const userOperation = prompt("Pick an operation you want to perfom (either +, -, * or /): ");

/*  Take input for number*/

const numb1 = parseFloat(prompt("Enter first number"));
const numb2 = parseFloat(prompt(" Enter second number"));

/* Calculate result and set conditions */

let result;

/* addition */

if(userOperation == '+'){
    result = numb1 + numb2;
}
 /* subtraction */

else if(userOperation == '-'){
    result = numb1 - numb2;
}

/* multiplication */

else if(userOperation == '*'){
    result = numb1 * numb2;
}

/* division */

else{
    result = numb1 / numb2;
}

/* result */


alert(result)

console.log(`${numb1} ${userOperation} ${numb2} = ${result}`);