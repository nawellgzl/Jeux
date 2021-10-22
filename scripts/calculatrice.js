/* JavaScript */

function btm(val) {
    document.getElementById("calc-output").innerHTML += val;
}

function btmClean() {
    document.getElementById("calc-output").innerHTML = "";
}

function btmPlus() {
    document.getElementById("calc-output").innerHTML += "+";
}

function btmLess() {
    document.getElementById("calc-output").innerHTML += "-";
}

function btmMultiply() {
    document.getElementById("calc-output").innerHTML += "*";
}

function btmDivision() {
    document.getElementById("calc-output").innerHTML += "/";
}

function btmEgal() {
    var egal = eval(document.getElementById('calc-output').innerHTML);
    document.getElementById('calc-output').innerHTML = egal;
}