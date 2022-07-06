/* -----------   Self invoked anonymous Function  -----------*/ 

 (function(){
     console.log('I am a self invoked anonymous Function');
 })(); // Here empty bracket should be there...




/* -----------   Self invoked anonymous Function using arrow function -----------*/ 

 (() => {
     console.log('I am a self invoked anonymous Function');
 })();



/* "This" key word application difference in normal functions and arrow functions  */

const person = {
    firstName: "Mangala",
    lastName: "Karunarathne",

    sayFullname:function() {

        console.log('I am a self invoked anonymous function and My Name is ', this.firstName, this.lastName);
    (function(){
        console.log('I am a self invoked anonymous function and My Name is ', this.firstName, this.lastName)
    })(); // Here it is not working properly because of that self anonymous function is available inside a function
    
    (() => {
        console.log('I am a self invoked anonymous function and My Name is ', this.firstName, this.lastName)
    })(); // here it's working... it shows that this key word not supported for anonymous function within a function
    and it can be avoided using arrow function 

}

}

person.sayFullname(); // person kiyana object eka ethule thiyana sayFullname function eka call kranawa

