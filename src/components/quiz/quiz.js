import "./quizModal.scss";

import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination, EffectFade]);

let _config = {
    selector: "#quiz",
};

const quiz = (config = {}) => {
    _config = { ..._config, ...config };
    /*
     * TODO: make quiz component works with many containers
     * const quizContainer = document.querySelectorAll(_config.selector)
     * Right now problem with navigation buttons, they work outside the container
     */
    const quizContainer = document.querySelector(_config.selector);

    if (quizContainer) {
        const swiper = new Swiper(quizContainer, {
            autoHeight: true,
            effect: "fade",
            fadeEffect: { crossFade: true },
            swipeHandler: ".quiz-buttons",
            navigation: {
                // nextEl: ".quiz-button-next",
                prevEl: ".quiz-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });

        const inputsNextSlide =
            quizContainer.querySelectorAll(".quiz__input--next");
        inputsNextSlide.forEach((input) => {
            input.addEventListener("change", () => {
                swiper.slideNext();
            });
        });

        const nextButton = document.querySelector(".quiz-button-next");

        nextButton.addEventListener("click", () => {
            const activSlide = quizContainer.querySelector(
                ".swiper-slide-active"
            );
            const inputs = activSlide.querySelectorAll("input");
            if ([...inputs].some((input) => input.checked === true)) {
                swiper.slideNext();
            }
        });
    }
};

export default quiz;
