const showElement = (element) => element.classList.remove("none");
const hideElement = (element) => element.classList.add("none");

function init() {
    const menuButton = document.querySelector(".icon-menu");
    const navLateral = document.querySelector(".nav-lateral");
    const main = document.querySelector("main");
    
    menuButton.addEventListener('click', () =>
        navLateral.classList.contains("none") ? showElement(navLateral) : hideElement(navLateral)
    );
    window.onscroll = () => hideElement(navLateral);
    main.addEventListener('click', () => hideElement(navLateral));
}

window.onload = () => init();