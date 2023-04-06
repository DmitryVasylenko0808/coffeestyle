const mobMenuBtn = document.querySelector(".mob-menu");
const mobNavMenu = document.querySelector(".header-mob-nav");

mobMenuBtn.onclick = () => {
    mobNavMenu.classList.toggle("show");
}