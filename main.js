/*=================functions #1==================*/

function add(a, b) {
    return a + b;
}

console.log(add(5, 6));

/*================functions #2===================*/

function subtract(a, b) {
    return a - b;
}

console.log(subtract(5, 6));

/*=================functions #3==================*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 6));

/*=================functions #4==================*/

function returnValue(text) {                             // step 4                                  
    return text;//this calls on to the argument B        // step 5
}

function outputValue() {                                 // step 2
    console.log(returnValue("hello world"));             // step 3
}

    outputValue();                                       // step 1

/*=================classes #1==================*/

/*class Animal {
    constructor (sound) {
       this.sound = sound;
    }

    saySomething() {
        console.log(this.sound)
    }
}

    const myAnimal = new Animal("woof woof!");
    myAnimal.saySomething();
*/
    /*=================Fetch==================*/
/*
    const URL = "https://randomfox.ca/floof/"

    function insertImageOfFox(imageSrcUrl) {
    imageSrcUrl
    }

    function whenJasonIsDone(data) {
    imageSrcUrl.then(data => {
        catPic.innerHTML = `<img src="${data.image}"/>`)
    }

    function whenFetchIsDone(response) {
        response.json().then()
    }   

    fetch(URL).then(whenFetchIsDone);
    */

    /*=================Fizz buzz test==================*/

    const divThree= "Fizz"; 
    const divFive= "Buzz"; 
    const divThreeFive= "FizzBuzz"; 

        for (i = 1; i < 101; i++) {
            
            if (i % 3 === 0) {         // prints Fizz for numbers that can divide with three. each third number
                console.log("Fizz");
            }

            else if(i % 5 === 0) {    // prints Buzz for numbers that can divide with five
                console.log("Buzz");
            }

            else if (i % 15 === 0) {  // prints FizzBuzz for numbers that can divide with three and five
                console.log("FizzBuzz");
            }

            else {                   // prints out the rest of the numbers that dont have a condition
                console.log(i);
            }
        }

    /*=================Array==================*/

    const numbers = [5, 10, 2, 18, 19, 22, 30, 1];
    
    numbers.sort((a, b) => b-a); // prints out the numbers with biggest to smallest value in array

    console.log(numbers);

