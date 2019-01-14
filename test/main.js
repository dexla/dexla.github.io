//Пример 1----------------------------------------
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

//Пример 2----------------------------------------
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

//Пример 3----------------------------------------
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
//Пример 4----------------------------------------
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

//Пример 5----------------------------------------
function f3() {
    var p;
    p = document.getElementById("out5");
    for (var i=0; i<101; i=i+5) {
        p.innerHTML += i + " ";
    }
};

//Пример 6----------------------------------------
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

//пример 7----------------------------------------
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

//Пример 8----------------------------------------
// document.getElementById("slider-left").onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;   
var polosa = document.getElementById("polosa");
var slider = document.getElementById('slider');

// если наведёшь на слайдер, то он остановится
slider.onmouseover = function() {
    clearTimeout(timer);
};

// если уберешь мышку со слайдера, он вновь запуститься
slider.onmouseout = function() {
    autoSlider();
};

function autoSlider() {
    timer = setTimeout(function() {
        left = left - 128;
        if (left < -3456) {
            left = 0;
            clearTimeout(timer)
        }
        polosa.style.left = left +'px';
        autoSlider();
    }, 1000)
}


document.getElementById("slider-right").onclick = sliderRight;
var polosa = document.getElementById("polosa");
function sliderRight() {
    left = left + 128;
    if (left > 0) {
        left = -3456;
    }
    polosa.style.left = left +'px';
}

//Пример 9----------------------------------------
var h = document.getElementsByTagName('h4')
console.log(h);

for (var i=0; i<h.length; i++) {
    h[i].onclick = f5;
}

function f5() {
    console.log("work")
    this.style.background = "red";
    this.style.color = 'white';
}

var h1 = document.getElementsByClassName('one');

for (var i=0; i<h1.length; i++) {
    h1[i].onclick = f6;
}
function f6() {
    this.style.background = 'gray';
    this.style.color = 'white';
}

//пример 10----------------------------------------
var radio = document.getElementsByName('prim');
for (var i=0; i<radio.length; i++) {
    radio[i].onchange = testRadio;
}

function testRadio() {
    console.log (this.value)
}

document.getElementById('radio-one').onclick = checkRadio;
function checkRadio() {
    for (var i=0; i<radio.length; i++) {
        if (radio[i].checked) {
            alert (radio[i].value);
            break;
        }
    }
};

//Пример 11----------------------------------------------
document.getElementById('r1').oninput = cssGenerator;
function cssGenerator() {
    //прямоугольник
    let div = document.getElementById('test');
    // получаю textarea
    let out9 = document.getElementById('out9');
    out9.innerHTML = 'border-radius: ' + this.value + 'px;' + '\n';
    out9.innerHTML += '-webkit-border-radius: ' + this.value + 'px;';
    // console.log (this.value);
    div.style.borderRadius = this.value + 'px';
};

//Пример 12----------------------------------------------
let q = {};
let w = {
    "one" : 12,
    "hello" : "world",
    "prim" : 2000,    
};
w.one = 9000;
// console.log (w['prim']);
// console.log (w.one);
//console.log (w.double key); //ошибка
// console.log (w['double key']);
let ppp = 'hello';
console.log (w[ppp]);
let out10 = document.getElementById('out10');
for (var tret in w) {
    out10.innerHTML += tret + ' --- ' + w[tret] + '<br>' ;
}
//Пример 13----------------------------------------------
let man = {
    "name" : "Max",
    "age" : 31,
    "sex" : "male",
    "id" : 3863
};
// console.log (man);
// console.log (man.name);
let man2 = {
    "name" : "Max",
    "age" : 31,
    "sex" : "male",
    "id" : 3863,
    "year" : function () {
        return 2019 - this.age;
    }
};
console.log (man2.year());

let mas1 = {
    "mas" : [5, 6, 34, 12, 45],
    "sum" : function () {
        let sum = 0;
        for (var i=0; i<this.mas.length; i++) {
            sum = sum + this.mas[i];
        }
        return sum;
    }
}

//Пример 14----------------------------------------------
console.log (mas1.sum());
let goods = {
    "28292" : {
        "name" : "banana",
        "cost" : 30,
        "image" : "https://cdn0.iconfinder.com/data/icons/fruits-vegetables-13/24/banan_fruit_health_food_healthy-128.png",
        "stock" : "да"
    },
    "25433" : {
        "name" : "tomate",
        "cost" : 25,
        "image" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "stock" : "нет"
    }
};
console.log (goods);
let out12 = "";
for (let key2 in goods) {
    out12 += 'Название: ' + goods[key2].name + '<br>';
    out12 += 'Цена: ' + goods[key2].cost + '<br>';
    out12 += 'Наличие на складе: ' + goods[key2].stock + '<br>';
    // <>
    out12 +='<img src="'+ goods[key2].image+'">';
    out12 += '<br>'
}
document.getElementById('out12').innerHTML = out12;

//Пример 15----------------------------------------------
function one() {
    return 9;
};
// console.log(one()+9);

function sum(a, b) {
    return (a+b);
}
// console.log(sum(4, 15));

function sum(a, b) {
    var c = 50; //действует только внутри функции
    a = a || 10;
    b = b || 20;
    alert(a+b);
    // return (a+b);
}
// console.log(sum());
// console.log(c);

document.getElementById('out13').onclick = function() {
    sum(15, 13);
};
// document.getElementById('out13').onclick = sum(15, 13);
