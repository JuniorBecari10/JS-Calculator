var num_input = document.getElementsByClassName("num")[0];
var pre_result = document.getElementsByClassName("pre-result")[0];

const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
const backBtn = document.getElementById("back");

const ops = ["+", "-", "×", "÷"];

clearBtn.onclick = clear;
equalBtn.onclick = equal;
backBtn.onclick = back;

function addNum(s) {
    //if (calc(num_input.value + s) == "0") return;
    
    for (let op of ops) {
        if (s === op && s !== "-" && num_input.value === "") return;
        
        /*if (s !== op && num_input.value.charAt(num_input.value.length - 1) === "%")
            s = "*" + s;*/
        
        for (let opp of ops) {
            if (s === op && opp === num_input.value.charAt(num_input.value.length - 1)) return;
        }
    }
    
    //let selstart = num_input.selectionStart == 0 ? num_input.length : 0;
    
    num_input.value += s;// insertChar(num_input.value, s, selstart);
    pre_result.innerHTML = calc(num_input.value);
}

function back() {
    //let selstart = num_input.selectionStart;
    
    num_input.value = removeChar(num_input.value, num_input.value.length);//num_input.value.substring(0, num_input.value.length - 1);
    //pre_result.innerHTML = pre_result.innerHTML.substring(0, pre_result.innerHTML.length - 1);
    
    pre_result.innerHTML = calc(num_input.value);
    
    //num_input.selectionStart = selstart;
}

function removeChar(str, idx) {
    return str.slice(0, idx - 1) + str.slice(idx);
}

function insertChar(str, chr, idx) {
    return str.slice(0, idx - 1) + chr + str.slice(idx);
}

function clear() {
    num_input.value = "";
    pre_result.innerHTML = "";
}

function equal() {
    if (num_input .value === "") return;
    
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
        c = c.replace("÷", "/"); // division sign (%)
        c = c.replace("×", "*"); // mult sign (x)
        c = c.replace("↑", "^"); // power (up arrow)
        
        //let comp = math.compile(c)
        let ev = math.evaluate(c);
        
        //return math.evaluate(c) 
        return ev !== undefined ? ev : "";
    } catch (error) {
        console.error(error);
        return "";
    }
}
