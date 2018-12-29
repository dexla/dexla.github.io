var link = document.querySelector(".login-link");
var popap = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var map = document.querySelector(".contact-button");
var popap2 = document.querySelector(".modal-map");
var login = popap.querySelector("[name=login]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.add("modal-show");
    console.log("клик по ссылке");
});
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.remove("modal-show");
    console.log("клик по lshrt");
});
map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap2.classList.add("modal-show");
    console.log("dd");
});
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap2.classList.remove("modal-show");
    console.log("клик по tt");
});
