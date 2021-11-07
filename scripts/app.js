let menuOpen = false;
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");

function toggleMenu() {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        menu.style.top = "100px";
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        menu.style.top = "calc(-100% + 100px)";
    }
}

window.addEventListener("load", function () {
    menuBtn.addEventListener("click", toggleMenu);
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", toggleMenu);
    }
});