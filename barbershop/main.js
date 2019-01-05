var link = document.querySelector(".login-link");
var popap = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var close2 = document.querySelector(".modal-map .modal-close");
var map = document.querySelector(".contact-button");
var popap2 = document.querySelector(".modal-map");
var login = popap.querySelector("[name=login]");
var password = popap.querySelector("[name=password]");
var form= popap.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.remove("modal-show");
    popap.classList.remove("modal-error");
});
map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap2.classList.add("modal-show");
});
close2.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap2.classList.remove("modal-show");
});
form.addEventListener("submit", function(evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popap.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

