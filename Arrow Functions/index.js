/* ----------------- Arrow Function -------------------------*/
// First Method ----------------------------------------------
function addOne(a,b){
    return a+b;
}

console.log("The result is : "+ addOne(2,10))

// First Method ----------------------------------------------

// function subOne(a,b){
//     return a-b;
// }

// console.log("The result is : "+subOne(2,10))


// Second Method ----------------------------------------------

const addTwo = function(a,b) {
  return a+b;
}

console.log("The result is : "+ addTwo(5,10))

// Third Method ----------------------------------------------

const addThree = (a,b) => {
    return a+b;
}

console.log("The result is : "+ addThree(10,10))

// Fourth Method ----------------------------------------------

const addFourth = (a,b) => a+b;

console.log("The result is : "+ addFourth(25,10))

// Fifth Method ----------------------------------------------

const addFifth = c => c*5+1;

console.log("The result is : "+ addFifth(5))