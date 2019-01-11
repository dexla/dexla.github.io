var link = document.querySelector(".button-search");
var popap = document.querySelector(".form-request");
var focusinput = popap.querySelector(".check-in");
var form = popap.querySelector(".search-form");
var checkout = popap.querySelector(".check-out");
var adult = popap.querySelector(".adult-in")

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.toggle("modal-show");
    focusinput.focus();
    console.log("Клик по ссылке вход");
});

form.addEventListener("submit", function(evt) {
    if (!focusinput.value || !checkout.value || !adult.value) {
        evt.preventDefault();
        popap.classList.add("modal-error");
        console.log("Работает");
    }
});
