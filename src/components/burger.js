export const burger = () => {
    const navbar = document.querySelector(".navigationbar-collapse");
    const burgerBtn = document.querySelector(".navigationbar-toggler");
    const mobMenuBg = document.querySelector(".mob-menu-bg");
    burgerBtn.addEventListener("click", (e) => {
        if (e.currentTarget.getAttribute("aria-expanded") === "true") {
            navbar.classList.add("activBurger");
            mobMenuBg.classList.add("activ");
            document.body.classList.add("bodyOverflow");
        } else {
            navbar.classList.remove("activBurger");
            mobMenuBg.classList.remove("activ");
            document.body.classList.remove("bodyOverflow");
        }
    });
};
