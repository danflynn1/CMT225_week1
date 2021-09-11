// function to run when user clicks button
const getTipAndTotal = () => {

    // acquire variables from user input fields
    const subTotal = parseFloat(document.getElementById('check').value)
    const tipPercnt = parseFloat(document.getElementById('tip').value)

    // perform calculations
    const tipAmount = (subTotal * (tipPercnt/100))
    const netTotal = (subTotal + tipAmount)
    
    // update page to display result of calculations
    document.getElementById('showTip').innerHTML = `$${tipAmount.toFixed(2)}`
    document.getElementById('total').innerHTML = `$${netTotal.toFixed(2)}`
};

// set event to run function when click is detected
document.getElementById('submit').onclick = function() {getTipAndTotal()};