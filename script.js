var buttons = document.getElementsByClassName('button');
var display = document.getElementById('expression');

display.textContent = 0;
function isOperator(op){
    return (op == "." || op == "+" || op == "-" || op == "*" || op == "/" || op == "%");
}
function calculate(value){
    //add animation
    if(value == "13"){
        value = "=";
    }
    if(value == "c"){
        value = "C";
    }
    let btn = document.getElementById("btn-" + value.charCodeAt());
    if(btn != null){
        btn.classList.add('animate-btn');
        setTimeout(() => {
            btn.classList.remove('animate-btn');
        }, 100);
        //perform keypress or click
        if(display.textContent == "0" && value == "."){
            display.textContent = "0.";
        }
        else if(value == "="){
            try{
                var result = eval(display.textContent);
                display.textContent = result;
            }
            catch(err){
                display.textContent = "SYNTAX ERROR";
            }
        }
        else if(value == "C" || value == "c"){
            display.textContent = "0";
        }
        else if(isOperator(value) && display.textContent[display.textContent.length-1] == value){
            display.textContent = display.textContent; 
        }
        else{
            if(display.textContent == "0"){
                display.textContent = "";
            }
            display.textContent += value;
        }
    }
}
function process(element){
    var value = element.target.getAttribute('data-key');
    calculate(value);
}
function keyProcess(){
    var value = event.keyCode;
    if(value != "13"){
        value = String.fromCharCode(value);
    }
    calculate(value);
}
// Add event listener to all buttons
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("mousedown",process);
    buttons[i].id = "btn-" + (buttons[i].textContent).charCodeAt();
}

document.addEventListener("keypress",keyProcess);