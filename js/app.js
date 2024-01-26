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
const productsSlider = new Swiper('.filter-swiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true
})
const productsCategories = new Swiper('.swiper-categories', {
    freeMode: true,
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 'auto',
        },
        798: {
            spaceBetween: 10,
            slidesPerView: 4,
        },
        1022: {
            spaceBetween: 10,
            slidesPerView: 5,
        },
        1230: {
            spaceBetween: 10,
            slidesPerView: 6,
        },
    }
})
const modalCartSliders = document.querySelectorAll('.modal-cart-swiper');
const modalCartSliderButtonsNext = document.querySelectorAll('.modal-cart__slider-button.next')
const modalCartSliderButtonsPrev = document.querySelectorAll('.modal-cart__slider-button.prev')
modalCartSliders.forEach((slider, index) => {
    new Swiper(slider, {
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: modalCartSliderButtonsNext[index],
            prevEl: modalCartSliderButtonsPrev[index],
        },
    })
})
//End sliders

//Start Card products
const cardProductsBtn = document.querySelectorAll('[data-button="card-product"]');
const cardProductsCounters = document.querySelectorAll('[data-block="card-product"]');
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

// Start accordions
class Accordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true,
            duration: 350
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            this.toggle(elHeader.parentElement);
        });
    }
    show(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style.display = 'block';
        const height = elBody.offsetHeight;
        elBody.style.height = 0;
        elBody.style.overflow = 'hidden';
        elBody.style.transition = `height ${this._config.duration}ms ease`;
        elBody.classList.add('collapsing');
        el.classList.add('accordion__item_slidedown');
        elBody.offsetHeight;
        elBody.style.height = `${height}px`;
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            el.classList.remove('accordion__item_slidedown');
            elBody.classList.add('collapse');
            el.classList.add('accordion__item_show');
            elBody.style.display = '';
            elBody.style.height = '';
            elBody.style.transition = '';
            elBody.style.overflow = '';
        }, this._config.duration);
    }
    hide(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style.height = `${elBody.offsetHeight}px`;
        elBody.offsetHeight;
        elBody.style.display = 'block';
        elBody.style.height = 0;
        elBody.style.overflow = 'hidden';
        elBody.style.transition = `height ${this._config.duration}ms ease`;
        elBody.classList.remove('collapse');
        el.classList.remove('accordion__item_show');
        elBody.classList.add('collapsing');
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            elBody.classList.add('collapse');
            elBody.style.display = '';
            elBody.style.height = '';
            elBody.style.transition = '';
            elBody.style.overflow = '';
        }, this._config.duration);
    }
    toggle(el) {
        el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
}
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    new Accordion(accordion, {
        alwaysOpen: false
    });
})
// End accordions

// Start custom scrolss
const catalogBlocks = document.querySelectorAll('#scroll');
catalogBlocks.forEach(block => {
    new MiniBar(block, {
        hideBars: false,
        mutationObserver: {
            attributes: true,
            childList: true,
            subtree: true
        },
    });
})
// End custom scrols

//Start tabs
const tabs = (tabsPanel, tabsButtons, tabsContent, tabSelector, func = null) => {
    tabsPanel.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest(`.${tabSelector}`)) {
            const btn = e.target.closest(`.${tabSelector}`);
            tabsButtons.forEach((tab, index) => {
                if (tab === btn) {
                    tab.classList.add('active');
                    tabsContent[index].classList.add('active');
                } else {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active');
                    }
                    if (tabsContent[index].classList.contains('active')) {
                        tabsContent[index].classList.remove('active');
                    }
                    if (func !== null) {
                        func()
                    }
                }
            })
        }
    })
}

// tabs(catalogTabPanel, catalogTabButtons, catalogTabContents, 'catalog__tabs-link');
//End tabs

// Start catalog
const catalogButton = document.querySelector('.header__ctg-btn');
const catalog = document.querySelector('.catalog');
const backButtonsCatalog = document.querySelectorAll('[data-button="back-catalog"]');
const closeButtonsCatalog = document.querySelectorAll('[data-button="close-catalog"]');

const catalogTabPanel = document.querySelector('.catalog__tabs');
const catalogTabButtons = document.querySelectorAll('.catalog__tabs-link');
const catalogTabContents = document.querySelectorAll('.catalog__content');

catalogButton.addEventListener('click', () => {
    catalogButton.classList.toggle('active');
    catalog.classList.toggle('active');
    if (catalogButton.classList.contains('active')) {
        blockBody();
    } else {
        unBlockBody();
    }
})

catalogTabPanel.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest(`.catalog__tabs-link`)) {
        const btn = e.target.closest(`.catalog__tabs-link`);
        catalogTabButtons.forEach((tab, index) => {
            if (tab === btn) {
                tab.classList.add('active');
                if (window.innerWidth <= 606) {
                    catalogTabContents[index].classList.add('mobile-active');
                }
                catalogTabContents[index].classList.add('active');
            } else {
                if (tab.classList.contains('active')) {
                    tab.classList.remove('active');
                }
                if (window.innerWidth <= 606) {
                    if (catalogTabContents[index].classList.contains('mobile-active')) {
                        catalogTabContents[index].classList.remove('mobile-active');
                    }
                }
                if (catalogTabContents[index].classList.contains('active')) {
                    catalogTabContents[index].classList.remove('active');
                }
            }
        })
    }
})

backButtonsCatalog.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (window.innerWidth <= 606) {
            if (catalogTabContents[index].classList.contains('mobile-active')) {
                catalogTabContents[index].classList.remove('mobile-active');
            }
        }
    })
})
closeButtonsCatalog.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        unBlockBody();
        catalogTabContents.forEach((content, i) => {
            if (content.classList.contains('mobile-active')) {
                content.classList.remove('mobile-active');
            }
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            }
            if (catalogTabButtons[i].classList.contains('active')) {
                catalogTabButtons[i].classList.remove('active')
            }
        })
        catalogTabContents[0].classList.add('active');
        catalogTabButtons[0].classList.add('active');
        if (catalogButton.classList.contains('active')) {
            catalogButton.classList.remove('active');
        }
        if (catalog.classList.contains('active')) {
            catalog.classList.remove('active');
        }
    })
})
// End catalog

//Start custom-select
const customSelects = document.querySelectorAll('.select > .select__value');
const customSelectsOptions = document.querySelectorAll('.select__list');
customSelects.forEach(select => {
    select.addEventListener('click', () => {
        document.querySelectorAll('.select').forEach(block => {
            if (block.classList.contains('active')) {
                block.classList.remove('active')
            }
        })
        select.parentNode.classList.toggle('active');
    })
})
customSelectsOptions.forEach((panel, index) => {
    panel.addEventListener('click', (e) => {
        if (e.target.closest('label')) {
            customSelects[index].querySelector('.value').textContent = e.target.closest('label').textContent;
            if (customSelects[index].parentNode.classList.contains('active')) {
                customSelects[index].parentNode.classList.remove('active')
            }
        }
    })
})
document.addEventListener('click', (e) => {
    if (!e.target.closest('.select')) {
        customSelects.forEach(select => {
            if (select.parentNode.classList.contains('active')) {
                select.parentNode.classList.remove('active')
            }
        })
    }
})
//End custom-select

//Start range-sliders
const rangeSliderFilters = document.querySelectorAll('#filter-range');
const rangeInputsFrom = document.querySelectorAll('[data-input="from"]');
const rangeInputsUpTo = document.querySelectorAll('[data-input="up-to"]');
rangeSliderFilters.forEach((slider, index) => {
    const rangeSliderOptions = {
        start: [+slider.dataset.start, +slider.dataset.end],
        connect: true,
        range: {
            'min': [+slider.dataset.min],
            'max': [+slider.dataset.max]
        }
    }
    const snapValues = [
        rangeInputsFrom[index],
        rangeInputsUpTo[index]
    ];
    noUiSlider.create(slider, rangeSliderOptions);
    slider.noUiSlider.on('update', function (values, handle) {
        let summ = String(Math.round(values[handle]));
        summ = summ.replace(/[^\d.]/g, '');
        summ = summ.replace(
            /(\d)(?=(\d{3})+([^\d]|$))/g,
            '$1 ',
        );
        snapValues[handle].value = summ;
    });
    slider.noUiSlider.on('set', function (values, handle) {
        let summ = String(Math.round(values[handle]));
        summ = summ.replace(/[^\d.]/g, '');
        summ = summ.replace(
            /(\d)(?=(\d{3})+([^\d]|$))/g,
            '$1 ',
        );
        snapValues[handle].value = summ;
    });
    rangeInputsFrom[index].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d.]/g, '');
        e.target.value = e.target.value.replace(
            /(\d)(?=(\d{3})+([^\d]|$))/g,
            '$1 ',
        );
    })
    rangeInputsUpTo[index].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d.]/g, '');
        e.target.value = e.target.value.replace(
            /(\d)(?=(\d{3})+([^\d]|$))/g,
            '$1 ',
        );
    })
    rangeInputsFrom[index].addEventListener('change', () => {
        if (+rangeInputsFrom[index].value.replace(/\D/g,'') > 0 && +rangeInputsFrom[index].value.replace(/\D/g,'') < +slider.dataset.max) {
            slider.noUiSlider.set(+rangeInputsFrom[index].value.replace(/\D/g,''));
        } else {
            slider.noUiSlider.set(+slider.dataset.max);
        }
    })
    rangeInputsUpTo[index].addEventListener('change', () => {
        if (+rangeInputsUpTo[index].value.replace(/\D/g,'') > 0 && +rangeInputsUpTo[index].value.replace(/\D/g,'') < +slider.dataset.max) {
            slider.noUiSlider.set(+rangeInputsUpTo[index].value.replace(/\D/g,''));
        } else {
            slider.noUiSlider.set(+slider.dataset.max);
        }
    })
})
//End range-slider

//Start filters
const filterOpenBtn = document.querySelector('.filter-button');
const filterBlock = document.querySelector('.filter');
const filterCloseBtn = document.querySelector('[data-button="close-filter"]');
if (filterOpenBtn) {
    filterOpenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        blockBody();
        filterBlock.classList.toggle('active');
    })
}
if (filterCloseBtn) {
    filterCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBlock.classList.toggle('active');
        unBlockBody();
    })
}

//End filters

//Start search header
const mobileSearchModal = document.querySelector('.search');
const mobileSearchButtonHeader = document.querySelector('.header__search');
const closeModalSearchButton = document.querySelector('[data-button="close-search"]');

const searchHeaderInput = document.querySelector('.header__form-input');
const searchHeaderBlock = document.querySelector('.header__form-search');

const searchModalInput = document.querySelector('.search__form-input');
const searchModalResetInputButton = document.querySelector('.search__form-reset');
const searchModalResultBlock = document.querySelector('.search__result');

mobileSearchButtonHeader.addEventListener('click', (e) => {
    e.preventDefault();
    mobileSearchModal.classList.toggle('active');
    blockBody()
})
closeModalSearchButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileSearchModal.classList.toggle('active');
    unBlockBody()
})
searchHeaderInput.addEventListener('input', (e) => {
    if (e.target.value.length !== 0) {
        searchHeaderBlock.classList.add('active');
    } else {
        if (searchHeaderBlock.classList.contains('active')) {
            searchHeaderBlock.classList.remove('active');
        }
    }
})
searchModalResetInputButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchModalInput.value = '';
    if (searchModalResetInputButton.classList.contains('active')) {
        searchModalResetInputButton.classList.remove('active');
    }
    if (searchModalResultBlock.classList.contains('active')) {
        searchModalResultBlock.classList.remove('active');
    }
})
searchModalInput.addEventListener('input', (e) => {
    if (e.target.value.length !== 0) {
        searchModalResetInputButton.classList.add('active');
        searchModalResultBlock.classList.add('active');
    } else {
        if (searchModalResetInputButton.classList.contains('active')) {
            searchModalResetInputButton.classList.remove('active');
        }
        if (searchModalResultBlock.classList.contains('active')) {
            searchModalResultBlock.classList.remove('active');
        }
    }
})
//End search header

//Start masked inputs
const phoneInputs = document.querySelectorAll('[data-input="masked"]');
const im = new Inputmask({
    mask: '(+7|8) (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
})
phoneInputs.forEach(input => {
    im.mask(input);
})
//End masked inputs

//Start buyers hidden blocks
const buyerLinks = document.querySelectorAll('[data-link="buyer"]');
const buyerHiddenBlocks = document.querySelectorAll('[data-block="buyer"]');
buyerLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        buyerHiddenBlocks[index].classList.remove('about__info_hidden');
        link.style.display = 'none';
    })
})
//End buyers hidden blocks