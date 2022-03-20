var num_input = document.getElementsByClassName("num")[0];
var pre_result = document.getElementsByClassName("pre-result")[0];

const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

clearBtn.onclick = clear;
equalBtn.onclick = equal;

function addNum(s) {
    num_input.value += s;
    pre_result.innerHTML = calc(num_input.value)
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

function calc(c) {
    try {
        //c = c.replace("&#247;", "/");
        
        return eval(c);
    } catch (error) {
        console.error(error);
        return "";
    }
}
