export default () => {
    const containerStars = document.querySelectorAll(".evaluation-stars");
    const inputRaiting = document.querySelectorAll("input[name=raiting]");

    containerStars.forEach((container, indexContainer) => {
        container.addEventListener("click", (e) => {
            const starDiv = e.target.closest(".evaluation-star");
            const stars = container.querySelectorAll(".evaluation-star");
            const index = [...stars].findIndex((star) => {
                return star === starDiv;
            });

            for (let i = 0; i < stars.length; i++) {
                const tagI = stars[i].children[0];
                if (i <= index) {
                    tagI.style.color = "#f1a700";
                } else {
                    tagI.style.color = "#d9d9d5";
                }
            }

            inputRaiting[indexContainer].value = index + 1;
        });
    });
};
