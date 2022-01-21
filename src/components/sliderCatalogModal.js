import Swiper, { Thumbs } from "swiper";
import "swiper/css";

Swiper.use([Thumbs]);

const sliderCatalogModal = () => {
    const swiperCatalogThumbArr = document.querySelectorAll(
        ".swiperCatalogThumb"
    );
    const swiperCatalogArr = document.querySelectorAll(".swiperCatalog");

    swiperCatalogThumbArr.forEach((itemSwiperThumb, index) => {
        const itemSwiper = swiperCatalogArr[index];

        itemSwiperThumb.classList.add(`swiperCatalogThumbArr${index}`);
        itemSwiper.classList.add(`swiperCatalogArr${index}`);

        const swiperCatalogThumb = new Swiper(itemSwiperThumb, {
            spaceBetween: 10,
            direction: "horizontal",
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                // when window width is >= 992px
                992: {
                    direction: "vertical",
                },
            },
        });

        new Swiper(itemSwiper, {
            loop: true,
            spaceBetween: 10,
            thumbs: {
                swiper: swiperCatalogThumb,
            },
        });
    });
};

export default sliderCatalogModal;
