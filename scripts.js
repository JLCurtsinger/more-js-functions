// helper function to display to page
function addToPage(string){
	document.querySelector("#section1 ul").innerHTML += `<li>${string}</li>`;
}

// let's write a function that accepts two arguments then adds them together. If the arguments aren't both numbers, concatenate that with the other argument and a space between the args, otherwise perform addition
function addTheValues(param1, param2){
    if(isNaN(param1) || isNaN(param2)){
        addToPage("One of the paramaters is not a number, when added they equal: " + param1 + " " + param2);
    }
    else{
        addToPage("Both of the parameters are numbers, and when added they equal: " + (param1 + param2));
    }
}

// call the function a few times with different parameters
addTheValues(2,3);
addTheValues("hello", 3);
addTheValues(4, "Justin");
addTheValues("Justin", "Curtsinger");

// let's talk about scope and see it in action
// function with a local variable to display to the screen
function scopeExample(){
    let localVariable = "This is a local variable from the scopeExample() function.";
    addToPage(localVariable);
}

// do functions execute when you don't call them?
scopeExample();

// this won't work because this variable does not exist outside of the scopeExample function
// try to access that local variable from the previous function
// addToPage(localVariable);


// let's create a global score variable
let score = 0;

// now let's write a function that will add two to the current score each time it's called
function scoreBasket(){
    return score += 2;
}

// we could also have a function for a three-pointer
function scoreThree(){
    return score += 3;
}

// now let's call that a couple of times, then write the current score to the page
addToPage("The current score: " + score);
scoreBasket();
scoreBasket();
addToPage("Score after two baskets: " + score);
scoreThree();
addToPage("Score after a three pointer: " + score);

// let's create a number variable and initialize it to a value of 5
let number = 5;

// don't forget, you can call a function that returns a value and assign that returned value to a variable
// this function will double the parameter's value and return it
function doubleMyNumber(number){
    return number *=2;
}

// now let's call doubleMyNumber and pass in number as the parameter, then assign the returned value back to number
number = doubleMyNumber(number);
addToPage("Double the value of 25: " + doubleMyNumber(25));

// and let's write that value to the page


// let's re-write that last function as an arrow function and use it to double the number variable again
let doubleMyNumberArrow = (number) => number *=2;

// now call that function again
addToPage("doubleMyNumberArrow(25) = " + doubleMyNumberArrow(25));

// and write the value to the page again


// write a function to convert an amount of change under one dollar 
// to the number and type of coins needed to make that change
// we will return the number of each type of coin in order using an array like this:
// [quarters, dimes, nickels, pennies]
function calcChange(amount){
    //calc num quarters & subtract from total change
    let quarters = Math.floor(amount / 25);
    amount -= (quarters * 25);
    // calc num dimes & subtract from total
    let dimes = Math.floor(amount / 10);
    amount -= (dimes * 10);
    //calc num nickels & subtract from total
    let nickels = Math.floor(amount / 5);
    amount -= (nickels * 5);
    //set num pennies
    let pennies = amount;

    //return the change
    return [quarters, dimes, nickels, pennies];
}


// practice from one of the zyBooks activities
// The code below produces a 5 x 10 box of question marks. Convert the code into a function called drawBox() that has three parameters:
// numRows - The number of rows for the box.
// numCols - The number of columns for the box.
// boxChar - The character to use to create the box. If no argument is supplied, use "X".
// Ex: drawBox(5, 4, "!") and drawBox(2, 6) should display the boxes pictured below.

// !!!!
// !!!!
// !!!!
// !!!!
// !!!!
// XXXXXX
// XXXXXX
// Convert into a drawBox function
function drawBox(numRows, numCols, boxChar){
    if(boxChar === undefined){
        boxChar = "X";
    }

    for (let r = 0; r < numRows; r++) {
        let line = "";
        for (let c = 0; c < numCols; c++) {
            line += boxChar;
        }
        console.log(line);
    }
}

// you could also write the code below to assign the value to the boxChar variable 
// let boxChar = boxChar || "X";

// call our new function with different arguments
drawBox(3,3,"*");
drawBox(3,3);


// ------------------------------------
// CODE BELOW IS COMPLETE - DO NOT EDIT
// ------------------------------------

// help calcChange Function
function helpCalcChange(e){
    // prevent default form submission
    e.preventDefault();

    // get form input where user will enter change
    let input = document.getElementById("cents");

    // convert that input's value into a number
    let cents = parseInt(input.value);

    // hide any previous error messages
    input.nextElementSibling.classList.add("hidden");

    // validate that we have a valid number between 1 and 99 in the input
    if(parseInt(cents) < 1 || parseInt(cents) > 99 || isNaN(cents)){
        // show the error span, because we do not have valid input
        input.nextElementSibling.classList.remove("hidden");
    }else{
        // call the function above to calculate the amount of each coin needed, handle returned info
        let coins = calcChange(parseInt(cents));
        console.log(coins);

        // display the change in the document
        document.getElementById("quarters").value = coins[0];
        document.getElementById("dimes").value = coins[1];
        document.getElementById("nickels").value = coins[2];
        document.getElementById("pennies").value = coins[3];

        // clear the input
        input.value = "";

        // give the input focus again
        input.focus();
    }
}

// attaching event handlers to buttons
document.getElementById("calculate").addEventListener("click", helpCalcChange);

// this code updates the year in the footer for the copyright on page load
// this style of function  is an immediately invoked function expression (IIFE)
// it is an anonymous function that calls itself and only runs on page load once
(function(){
	let now = new Date();
	let span = document.querySelector("footer span");
	span.innerHTML = now.getFullYear();
})();