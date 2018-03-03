// Like CSS and HTML, JS has comments that can be read by humans
// but have no effects

// We can output useful pieces of information so we know
// our code is working. You can view this in the "developer console" for
// your browser
console.log('My JavaScript is working');

// JS has different data types, notable numbers and strings (text)
console.log(5); // 5 is a number
console.log('Some text'); // 'Some text' is a string (note the quotes!)

// document.querySelector gives us the first HTML element
// to match the given CSS selector.
// Most browsers will show you which element on the page is selected
console.log(document.querySelector('h1'));

// We use 'let' to save information to reuse later
// let x = y
// Simply means, every time I refer to x, give me y
let colorCreatorButton = document.querySelector('.color-creator-button');
let colorCreatorBox = document.querySelector('.color-creator-box');

// Functions are re-useable snippets of code
// Every time I use one, the code inside gets executed
function changeColorBox() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    // We want to create something of the form rgb(n,n,n)
    // Fortunately we can add strings together to combine them into one long string
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    colorCreatorBox.style.background = color;
    colorCreatorBox.innerHTML = color;
}

// Execute the function
changeColorBox();

// addEventListener simply means, every time a thing happens to this element (e.g. it is clicked on)
// execute the given function
colorCreatorButton.addEventListener('click', changeColorBox);

let bigTextInput = document.querySelector('.big-text-input');
let bigTextDisplay = document.querySelector('.big-text-display');

function matchBigTextDisplayToInput() {
    bigTextDisplay.innerHTML = bigTextInput.value;
}

// The input event fires whenever the text inside the field changes
bigTextInput.addEventListener('input', matchBigTextDisplayToInput);
