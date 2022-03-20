var num_input = document.getElementsByClassName("num")[0];
var pre_result = document.getElementsByClassName("pre-result")[0];

const clearBtn = document.getElementById("clear");

clearBtn.onclick = clear;

function addNum(s) {
    num_input.value += s;
    pre_result.innerHTML = calc(num_input.value)
}

function clear() {
    console.log("a");
    
    num_input.value = "";
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
