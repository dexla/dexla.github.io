var link = document.querySelector(".map .contact-button");
var popap = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close");
var login = popap.querySelector("[name=name]");
var form = popap.querySelector("form");
var mail = popap.querySelector("[name=e-mail]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        mail.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.remove("modal-show");
    popap.classList.remove("modal-error")
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !mail.value) {
        evt.preventDefault();
        popap.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});