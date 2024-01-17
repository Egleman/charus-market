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
            spaceBetween: 0,
            slidesPerView: 'auto',
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
            spaceBetween: 18,
            slidesPerView: 'auto',
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

//Close cookies
const closeCookiesBtn = document.querySelector('.cookies__button');
const cookiesBlock = document.querySelector('.cookies');
closeCookiesBtn.addEventListener('click', () => {
    if (cookiesBlock.classList.contains('active')) {
        cookiesBlock.classList.remove('active')
    }
})

   //Start modal
const calcScroll = () => {
    let div = document.createElement('div');
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}
const blockBody = () => {
    const body = document.body;
    body.style.overflowY = 'hidden';
    body.style.touchAction = 'none';
    const bodyScroll = calcScroll();
    body.style.paddingRight = `${bodyScroll}px`;
}
const unBlockBody = () => {
    const body = document.body;
    body.style.overflowY = 'auto';
    body.style.touchAction = 'auto';
    body.style.paddingRight = `0`;
}

const modalLinks = document.querySelectorAll('[toggle]');
modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = link.getAttribute('toggle');
        document.querySelector(blockId).classList.toggle('active');
        if (document.querySelector(blockId).classList.contains('active')) {
            blockBody();
        } else {
            unBlockBody();
        }
    })
})
// End modals