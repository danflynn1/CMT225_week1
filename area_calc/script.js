
let l = parseInt(prompt('Enter rectangle length in centimeters:'));

// validate user entry and re-prompt if non numeric characters are entered
while (isNaN(l)) {
    l = parseInt(prompt('Enter a numeric value only for length:'))
}

let  w = parseInt(prompt('Enter rectangle width in centimeters:'));

// repeat validation for second input
while (isNaN(w)) {
    w = parseInt(prompt('Enter a numeric value only for width:'))
}

// formula for area of rectangle: A = length * width 
const a = w * l;

// formula for rectangle perimeter: P = 2(length + width)
const p = 2 * (l + w);

// write results to page 
const html = `<p><label>Length:</label> ${l} cm.</p>
    <p><label>Width:</label> ${w} cm.</p>
    <p><label>Area:</label> ${a} cm.<sup>2</sup></p>
    <p><label>Perimeter:</label> ${p} cm.</p>`
document.write(html)