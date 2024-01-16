//Start sliders

const heroSlider = new Swiper('.hero__swiper', {
    pagination: {
        el: '#hero-pagination',
        clickable: true
    },
    speed: 500,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.hero__button.next',
        prevEl: '.hero__button.prev',
    },
});

const categorySlider = new Swiper('.category__swiper', {
    spaceBetween: 18,
    grid: {
        rows: 2,
    },
    slidesPerView: 5,
    navigation: {
        nextEl: '.category__button.next',
        prevEl: '.category__button.prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 'auto',
        },
        606: {
            slidesPerView: 3,
        },
        798: {
            slidesPerView: 4,
        },
        1022: {
            spaceBetween: 13, 
            slidesPerView: 5,
        },
        1230: {
            spaceBetween: 18, 
        }
    }
});

//End sliders