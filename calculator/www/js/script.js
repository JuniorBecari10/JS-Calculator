var num_input = document.getElementsByClassName("num")[0];
var pre_result = document.getElementsByClassName("pre-result")[0];

const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
const backBtn = document.getElementById("back");

clearBtn.onclick = clear;
equalBtn.onclick = equal;
backBtn.onclick = back;

function addNum(s) {
    num_input.value += s;
    pre_result.innerHTML = calc(num_input.value);
}

function back() {
    num_input.value = num_input.value.substring(0, num_input.value.length - 1);
    //pre_result.innerHTML = pre_result.innerHTML.substring(0, pre_result.innerHTML.length - 1);
}

function clear() {
    num_input.value = "";
    pre_result.innerHTML = "";
}

function equal() {
    let pres = pre_result.innerHTML;
    
    num_input.value = pres;
    pre_result.innerHTML = "";
}

function insertPar() {
    let open = 0, close = 0;
    
    for (let s of num_input.value) {
        if (s === "(")
            open++;
        
        else if (s === ")")
            close++;
    }
    
    if (open === close) {
        addNum("(");
        
        return;
    }
    
    addNum(open < close ? "(" : ")")
}

function calc(c) {
    try {
        //c = c.replace("&#247;", "/");
        
        return eval(c);
    } catch (error) {
        console.error(error);
        return "";
    }
}
