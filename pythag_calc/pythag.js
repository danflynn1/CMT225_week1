

alert("Enter the length of any two sides of a right triangle to determine the length of the third side.");

// define a validation function where x is user supplied input. reprompts if entry is non numeric
const validateInput = (x) => {
    while (isNaN(x)) {
        x = parseFloat(prompt('Entry must be numeric characters:'))
    }
    return x.toFixed(2)
};

// assign results of validation function on user inputs
const side1 = validateInput(parseFloat(prompt('Enter length for side 1 in cm:')));

const side2 = validateInput(parseFloat(prompt('Enter length for side 2 in cm:')));

// create variable used to determine formula based on which sides are given. 
const isLongest = prompt("Is one of these sides the hypotenuse (longest side)?\nIf yes, enter '1' for side 1, or '2' for side 2.\nIf neither are the hypotenuse, enter 'N'.").toUpperCase();

// validate third input
while (isLongest != '1' && isLongest != '2' && isLongest != 'N') {
    isLongest = prompt("Enter 1, 2 or 'N' to proceed.").toUpperCase()
};

// define a function takes a & b as sides of the triangle and a string h (1, 2 or N) to determine which, if any, are the hypotenuse. returns length of 3rd side.
const getThirdSide = (a, b, h) => {
    let third;
    if (h == 'N') {
        third = Math.sqrt(a**2 + b**2)
    } else if (h == '1') {
        third = Math.sqrt(a**2 - b**2)
    } else if (h == '2') {
        third = Math.sqrt(b**2 - a**2)
    }
    return third.toFixed(2)
};

// function call with user inputs as params
let side3 = getThirdSide(side1, side2, isLongest);

// display results
const html = `<p><label>Side 1:</label> ${side1} cm</p>
    <p><label>Side 2:</label> ${side2} cm
    <p><label>Side 3:</label> ${side3} cm`;

document.write(html);