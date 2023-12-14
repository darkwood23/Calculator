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

function equalsTo() {
    display.innerText = eval(display.innerText)
}