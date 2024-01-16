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

const newsSlider = new Swiper('.news__swiper', {
    spaceBetween: 0,
    slidesPerView: 5,
    navigation: {
        nextEl: '.news__button.next',
        prevEl: '.news__button.prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 'auto',
        },
        798: {
            slidesPerView: 3,
        },
        1022: {
            slidesPerView: 4,
        },
        1230: {
            slidesPerView: 5,
        },
    }
});

const brandsSwiper = new Swiper('.brands__swiper', {
    navigation: {
        nextEl: '.brands__button.next',
        prevEl: '.brands__button.prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 'auto',
        },
        798: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        1022: {
            spaceBetween: 18, 
            slidesPerView: 3,
        },
        1230: {
            spaceBetween: 18, 
            slidesPerView: 4,
        },
    }
});

//End sliders

//Start Card products

const cardProductsBtn = document.querySelectorAll('[data-button="card-product"]');
const cardProductsCounters = document.querySelectorAll('.product-card__counter');
cardProductsBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        cardProductsCounters[index].classList.add('active');
    })
})

//End Card products

//Start counters

const buttonsPlus =  document.querySelectorAll('[data-button="plus"]');
const buttonsMinus =  document.querySelectorAll('[data-button="minus"]');
const countDisplays =  document.querySelectorAll('[data-block="count"]');

buttonsPlus.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        countDisplays[index].textContent = Number(countDisplays[index].textContent) + 1;
    })
})
buttonsMinus.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (Number(countDisplays[index].textContent) !== 1) {
            countDisplays[index].textContent = Number(countDisplays[index].textContent) - 1;
        }
    })
})

//End counters