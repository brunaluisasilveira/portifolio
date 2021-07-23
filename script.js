var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("show-menu");
    document.querySelector(".container").classList.toggle("show-menu");
});