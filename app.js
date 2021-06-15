const modal = document.querySelector(".modal");
const button = document.querySelector("#button1");
const close = document.querySelector(".modal__content--close")

button.addEventListener("click",() => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
})
close.addEventListener("click",() =>{
    modal.classList.remove("visible");
    modal.classList.add("hidden");
})
