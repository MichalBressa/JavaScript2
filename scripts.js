const display = document.getElementById("textArea");
const numericButtons = document.querySelectorAll(".numericButons");
const dotBtn= document.getElementById("dotButton");
let number1 = null;

// numeric buttons pressed
numericButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.value != "="){
            if(button.value == "."){
                const displayText = display.textContent;
                if (displayText.charAt(displayText.length - 1) != "."){
                    buttonPressed(button.textContent);
                }
            } else {
                if (display.textContent.charAt(0) == "0" && button.value == 0)
                {
                    // do nothing
                } else {
                    buttonPressed(button.textContent);
                }
            }
            
        } else {
            if (document.getElementById('multiplication').checked && number1 != null) {
                let text = display.textContent;
                let number2 = parseFloat(text);
                display.textContent = multiply(number1, number2);
                
            } else if (document.getElementById('division').checked && number1 != null){
                let text = display.textContent;
                let number2 = parseFloat(text);
                display.textContent = divide(number1, number2);
                
            } else if (document.getElementById('addition').checked && number1 != null){
                let text = display.textContent;
                let number2 = parseFloat(text);
                display.textContent = addition(number1, number2);
                
            } else if (document.getElementById('subtraction').checked && number1 != null){
                let text = display.textContent;
                let number2 = parseFloat(text);
                display.textContent = subtraction(number1, number2);
                
            } else if (document.getElementById('modulus').checked && number1 != null){
                let text = display.textContent;
                let number2 = parseFloat(text);
                display.textContent = modulus(number1, number2);
                
            }
            uncheckAll();
        }
    });
});

function buttonPressed(buttonText){
    display.textContent = display.textContent + buttonText;
} 

// operation radio buttons pressed
const radioButtons = document.querySelectorAll('input[name="operation"]');
radioButtons.forEach((input) => {
    input.addEventListener('click', () => {
        let text = display.textContent;
        number1 = parseFloat(text);
        display.textContent = "";
    });
});

//special
const specialButtons = document.querySelectorAll(".specialButons");
specialButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "AC":
                display.textContent = "";
                number1 = null;
                uncheckAll();
                break;
            case "DEL":
                display.textContent = display.textContent.slice(0, -1);
                break;
            case "+/-":
                try {
                    let text = display.textContent;
                    let number = parseFloat(text) * -1;
                    display.textContent = number;
                } catch (e) {
                    prompt("Error, invalid input");
                }
                break;
        }
    });
});

// add sanity checks
function multiply(num1, num2){
    try {
        num1 = parseFloat(num1);
    } catch (e) {
        prompt("Error, invalid input");
    }

    try {
        num2 = parseFloat(num2);
    } catch (e) {
        prompt("Error, invalid input");
    }

    return checkResult(num1 * num2);
}

function divide(num1, num2){

    try {
        num1 = parseFloat(num1);
    } catch (e) {
        prompt("Error, invalid input");
    }

    try {
        num2 = parseFloat(num2);
    } catch (e) {
        prompt("Error, invalid input");
    }

    if (num2 == 0){
        prompt("Do not divide by 0");
        display.textContent = "";
        return "";
    } 
    let result = num1/num2;
    if (result.length > 4){
        result = Math.round(result);
    }
    return result
}

function addition(num1, num2){
    try {
        num1 = parseFloat(num1);
    } catch (e) {
        prompt("Error, invalid input");
    }

    try {
        num2 = parseFloat(num2);
    } catch (e) {
        prompt("Error, invalid input");
    }

    return checkResult(num1+num2);
}

function subtraction(num1, num2){
    try {
        num1 = parseFloat(num1);
    } catch (e) {
        prompt("Error, invalid input");
    }

    try {
        num2 = parseFloat(num2);
    } catch (e) {
        prompt("Error, invalid input");
    }

    return checkResult(num1-num2);
}

function modulus(num1, num2){
    try {
        num1 = parseFloat(num1);
    } catch (e) {
        prompt("Error, invalid input");
    }

    try {
        num2 = parseFloat(num2);
    } catch (e) {
        prompt("Error, invalid input");
    }
    let result = num1 % num2;
    if (result.length > 4){
        result = Math.round(result);
    }
    return result
}

function checkResult(x){
    if (x.length > 4){
        return Math.round(x);
    }
    else {
        return x;
    }
}

function uncheckAll(){
    const radiobtns = document.getElementsByName("operation");
    for(var i=0;i<radiobtns.length;i++)
      radiobtns[i].checked = false;
}
