function alert1() {
    alert("Me too");
}

function alert2() {
    alert("I love you anyway!");
}

var m = Math;
m.c = m.ceil;
m.f = m.floor;
m.r = m.random;

function moveButtonRand() {
    var bTag = document.querySelector('.button2');
    var min = 1;
    var max = 95;
    // math random entre 2 valeurs
    var res = m.f(m.r() * (max - min + 1)) + min;
    bTag.style.top = res + "%";
    bTag.style.left = res + "%";
}