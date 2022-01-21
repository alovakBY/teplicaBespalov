import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
    faCheck,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faIgloo,
    faArrowsAltH,
    faArrowsAltV,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import GLightbox from "glightbox";

// components
import header from "./components/header";
import { burger } from "./components/burger";
import quiz from "./components/quiz/quiz";
import config from "./components/config";
import form from "./components/form";
import calculator from "./components/calculator";
import sliderCatalogModal from "./components/sliderCatalogModal";
import reviewCatalogModal from "./components/reviewCatalogModal";

// Styles
import "./styles/style.scss";
import "glightbox/dist/css/glightbox.min.css";

library.add([
    faCheck,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faIgloo,
    faArrowsAltH,
    faArrowsAltV,
    faStar,
]);
dom.watch();

document.addEventListener("DOMContentLoaded", () => {
    header();
    form();
    burger();
    quiz(config.quiz);
    calculator();
    sliderCatalogModal();
    reviewCatalogModal();
    new GLightbox({
        touchNavigation: true,
        loop: true,
    });
});
