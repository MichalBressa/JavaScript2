/*

textareaObject.value = textareaObject.value + button text

or 

do math when pressed


*/

const display = document.getElementById("textArea");
const numericButtons = document.querySelectorAll(".numericButons");

function buttonPressed(buttonText){
    display.textContent = display.textContent + buttonText;
} 
// numeric buttons pressed
numericButtons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonPressed(button.textContent);
    });
});

//special / operation buttons pressed
const specialButtons = document.querySelectorAll(".specialButons");
specialButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "AC":
                display.textContent = "";
                break;
        }
    });
});

/*
schemat
const firstNumber = display.textContent  // check if is int / float
https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
bool? operationChosen = true;

if (operationChosen){
    
}
*/

