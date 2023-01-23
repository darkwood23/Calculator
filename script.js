const display = document.querySelector(".display")


function displayDigit(digit) {
    if(display.innerText === '0') {
        display.innerText = digit
    }else {
        display.innerText += digit
    }
}

function deleteEverything() {
    display.innerText = '0'
}

function deleteLastDigit() {
    let newDisplay = display.innerText.split('')
    if(newDisplay.length === 1) {
        display.innerText = '0'
    }else if (display.innerText != 0) {
        let digits = display.innerText
        digits = digits.split('')
        digits.pop()
        let newT = digits.join("")
        display.innerText = newT
    }
    
}

function convertToPercent() {
    let digitTwo = Number(display.innerText) / 100
    console.log(digitTwo)
    display.innerText = digitTwo.toString()
}

function division() {
    let firstDigit = display.innerText
    equalsTo("division", firstDigit)
}

function multiplication() {
    let firstDigit = display.innerText
    equalsTo("multiplicaton", firstDigit)
}

function subtraction() {
    let firstDigit = document.innerText
    equalsTo("subtraction", firstDigit)
}

function addition() {
    let firstDigit = document.innerText
    equalsTo( "addition", firstDigit)
}

function equalsTo(stat, firstDigit) {
    if (stat === 'division') {

    }
}