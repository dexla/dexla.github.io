//Пример 1
function plus() {
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById("out").innerHTML = result;
};

function minus() {
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById("out").innerHTML = result;
};

function multiply() {
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById("out").innerHTML = result;
};
//Пример 2
function out2() {
    var p;
    p = document.getElementById("out2");
    // p.innerHTML += " <i>Hello</i>"
    // p.innerText += "<b>Hi</b>";
    // p.insertAdjacentHTML("beforeBegin","<b>bye! ");
    // p.insertAdjacentHTML("afterBegin","<b>bye! ");
    // p.insertAdjacentHTML("beforeEnd","<b>bye! ");
    // p.insertAdjacentHTML("afterEnd","<b>bye! ");
    p.outerHTML = '<div class="one"> Goodbye!</div>'
};
//Пример 3
function f1() {
    var n, p1;
    n = document.getElementById("num3").value;
    n = parseInt(n);
    p1 = document.getElementById("out3");
    if(n==100) {
        p1.innerHTML = " Число равно 100";
    } else if(n<100) {
        p1.innerHTML = " Ваше число меньше 100";
    } else {
        p1.innerHTML = " Ваше число больше 100";
    }
};
//Пример 4
var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
// tempOut = document.getElementById("temp-out");
// tempOut.innerHTML = prNum;

function f2() {
    var num4, out;
    
    num4 = document.getElementById("mynum").value;
    out = document.getElementById("out4");
    
    if(num4 == prNum) {
        out.innerHTML = "Вы угадали";
    } else if(num4>prNum) {
        out.innerHTML = "Вы ввели число больше, чем нужно";
    } else {
        out.innerHTML = "Вы ввели число меньше, чем нужно";
    }
};

//Пример 5
function f3() {
    var p;
    p = document.getElementById("out5");
    for (var i=0; i<101; i=i+5) {
        p.innerHTML += i + " ";
    }
};

//Пример 6
function f4() {
    var p;
    p = document.getElementById("out6");
    p1 = document.getElementById("out7")
    var i = 0;
    while (i<50) {
        p.innerHTML += i + " ";
        i=i+1;
    }

    var j = 100;
    do {
        p1.innerHTML += j + " ";
        j--;
    }
    while (j>0)
};

//пример 7
var m = [];
var m1 = [99, 33, 'hello'];
m1[3] = 'bye';
m1[4] = 5344;
console.log (m1);
// alert(m1.length);


// for (var i=0; i<m1.length; i++) {
//     document.getElementById("out8").innerHTML += m1[i] + "<br>";
// }
function masOut() {
    var p = document.getElementById("out8");
    var str = "";
    for (var i=0; i<m1.length; i++) {
        str += i + "--" + m1[i] + "<br>";
    }
    p.innerHTML = str;
}
masOut();
function push1() {
    var i1 = document.getElementById("i1").value;
    m1.push(i1);
    masOut();
}
function pop1() {
    m1.pop();
    masOut();
};

//Пример 8
document.getElementById("slider-left").onclick = sliderleft;

var left = 0;
var polosa = document.getElementById("polosa");

function sliderleft() {
    left = left - 128;
    if (left < -3456) {
        left = 0;
    }
    polosa.style.left = left +'px';
}


document.getElementById("slider-right").onclick = sliderright;
var polosa = document.getElementById("polosa");
function sliderright() {
    left = left + 128;
    if (left > 0) {
        left = -3456;
    }
    polosa.style.left = left +'px';
}