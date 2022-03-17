var num_input = document.getElementsByClassName("num")[0];
var pre_result = document.getElementsByClassName("pre-result")[0];

function addNum(s) {
    num_input.value += s;
    pre_result = calc(num_input.value)
}

function clear() {
    num_input.value = "";
    pre_result.innerHTML = "";
}

function calc(c) {
    try {
        return eval(c);
    } catch (error) {
        return "";
    }
}
