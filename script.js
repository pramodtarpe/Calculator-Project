var buttons = document.getElementsByClassName('button');
var display = document.getElementById('expression');

display.textContent = 0;
function isOperator(op){
    return (op == "." || op == "+" || op == "-" || op == "*" || op == "/");
}
function process(){
    var value = this.getAttribute('data-key');
    value = value.trim();
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
    else if(value == "AC"){
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
// Add event listener to all buttons
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",process,false);
}
