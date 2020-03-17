function increase(){
    var valueBox = document.getElementById("quantity");
    var newValue = Number(valueBox.getAttribute("value")) + 1;
    valueBox.setAttribute("value", newValue);
}

function decrease(){
    var valueBox = document.getElementById("quantity");
    var newValue = valueBox.getAttribute("value") - 1;
    if (newValue > 0){
        valueBox.setAttribute("value", newValue);
    }
}