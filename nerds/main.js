var link = document.querySelector(".contact-botton");
var popap = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close")

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.add("modal-show");
    // if (storage) {
    //     login.value = storage;
    //     password.focus();
    // } else {
    //     login.focus();
    // }
});
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.remove("modal-show");
});