var buttons = document.getElementsByClassName('button');
var display = document.getElementById('expression');

display.textContent = 0;
function process(){
    var value = this.getAttribute('data-key');
    value = value.trim();
    if(display.textContent == "0"){
        display.textContent = "";
    }
    if(value == "="){
        var result = eval(display.textContent);
        display.textContent = result;
    }
    else if(value == "AC"){
        display.textContent = "0";
    }
    else{
        display.textContent += value;
    }
}

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",process,false);
}
