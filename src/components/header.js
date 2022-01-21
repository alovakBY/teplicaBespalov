export default () => {
    const header = document.querySelector(".header");
    const headerWrapper = document.querySelector(".header-wrapper");
    const logo = document.querySelector(".logo img");
    const navigationContainer = document.querySelector(".navigation");
    const telephonContainer = document.querySelector(
        ".navigation-wrapper .header-tel"
    );
    const headerRight = document.querySelector(".header-right");

    function checkPositionHeader() {
        if (scrollY > 200) {
            header.style.backgroundColor = "rgba(239, 244, 247, 1)";
            headerWrapper.style.paddingTop = "10px";
            navigationContainer.style.maxWidth = "none";
            navigationContainer.style.paddingTop = "0px";
            telephonContainer.style.display = "block";
            telephonContainer.style.textAlign = "right";
            telephonContainer.style.border = "none";
            headerRight.style.display = "none";
            logo.style.width = "150px";
        } else {
            header.style.backgroundColor = "";
            headerWrapper.style.paddingTop = "";
            navigationContainer.style.maxWidth = "";
            navigationContainer.style.paddingTop = "";
            telephonContainer.style.display = "";
            telephonContainer.style.textAlign = "";
            telephonContainer.style.border = "";
            headerRight.style.display = "";
            logo.style.width = "";
        }
    }

    checkPositionHeader();

    window.addEventListener("scroll", checkPositionHeader);
};
