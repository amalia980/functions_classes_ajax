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

class Animal {
    constructor () {
       this.sound = sound;
    }

    saySomething() {
        console.log(this.sound)
    }
}

    const myAnimal = new Animal("woof woof!");
    myAnimal.saySomething();

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