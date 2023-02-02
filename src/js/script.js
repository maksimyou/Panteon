//Анимация кнопки   ----------------------------------------------------------------------

let button_figure = document.querySelector('.header_button_figure-2');

button_figure.addEventListener('mouseover', () => {
    document.querySelector('.get_consult').classList.toggle('active_a');
});
button_figure.addEventListener('mouseout', () => {
    document.querySelector('.get_consult').classList.toggle('active_a');
})

//Анимация кнопки 2  ----------------------------------------------------------------------

document.querySelectorAll('.training_item_button_wrapper').forEach(i => {

    i.lastElementChild.addEventListener('mouseenter', () => {
        i.children[0].style.background = '#F7931E';
    });
    i.lastElementChild.addEventListener('mouseleave', () => {
    });
    i.addEventListener('mouseenter', () => {
        i.children[0].style.background = '#F7931E';
        i.lastElementChild.style.color = 'white';
        i.parentElement.firstElementChild.style.color = '#F7931E';
    });
    i.addEventListener('mouseleave', () => {
        i.children[1].style.color = '#F7931E';
        i.parentElement.firstElementChild.style.color = '#0c1417';
        i.children[0].style.background = 'white';
    });
});


//Активация бургера  ----------------------------------------------------------------------

let burgerHeader = document.querySelector('.burger_header');

burgerHeader.addEventListener('click', () => {
    burgerHeader.classList.toggle('active-b');
    document.querySelector('.header_menu').classList.toggle('header_menu_show');
    if (!document.querySelector('.header_logo').style.zIndex) {
        setTimeout(() => {
            document.querySelector('.header_logo').style.zIndex = '2';
        }, 370)
    } else {
        document.querySelector('.header_logo').style.zIndex = '';
    }
});




//Переключение между блоками  ------------------------------------------------------------

let advantageItem = document.querySelectorAll('.advantage_item');
let newImageLife = document.querySelectorAll('.new_image_life_container');

advantageItem.forEach(i => {
    i.addEventListener('click', function (e) {
        for (const elem of newImageLife) {
            if (e.target.dataset.life == elem.dataset.life || e.target.parentElement.dataset.life == elem.dataset.life) {
                elem.classList.add('active_life-1');
                setTimeout(() => { elem.classList.add('active_life-2') }, 10)
            } else {
                elem.classList.remove('active_life-2');
                elem.classList.remove('active_life-1');
            };
        }

    });
})


//Модальное окно ------------------------------------------------------------

let modalContainer = document.querySelector('.modal_container');
let formButtonWrapper = document.querySelector('.form_button_wrapper');
let closeModal = document.querySelector('.data_call_close_icon');

formButtonWrapper.addEventListener('click', function (e) {
    modalContainer.classList.add('modal_active-1');
    setTimeout(() => { modalContainer.classList.add('modal_active-2') }, 10)
});

closeModal.addEventListener('click', function (e) {
    modalContainer.classList.remove('modal_active-2');
    setTimeout(() => { modalContainer.classList.remove('modal_active-1') }, 400)
});




//Скролл вниз к главному блоку

//let mainn = document.querySelector('#mainn');
let arrowDown = document.querySelector('.header_arrow_down_one_screen');
arrowDown.addEventListener('click', () => {
    const el = document.querySelector('.new_image_life_container');
    el.scrollIntoView({ block: "start", behavior: "smooth" });
})


let headerButton = document.querySelector('.header_button_figure-2');
headerButton.addEventListener('click', () => {
    const el = document.querySelector('.forms_container');
    el.scrollIntoView({ block: "start", behavior: "smooth" });
})
let life_post_button = document.querySelectorAll('.life_post_button');
life_post_button.forEach(i => {
    i.addEventListener('click', () => {
        const el = document.querySelector('.forms_container');
        el.scrollIntoView({ block: "start", behavior: "smooth" });
    })
})






// Подсвечивание строки и колонки 

let abonement1s = document.querySelectorAll('.abonement_count_lessons_price_container');

//   Функция Подсвечивание строки и колонки



function columnRowColorTitle(elem) {
    let row;
    let column = elem.parentElement.children[0];

    if (elem.parentElement.parentElement.classList[0] == 'abonement_count_lessons_price_container_slider') {
        row = elem.parentElement.parentElement;
        column.classList.toggle('active-count');
        row.children[0].children[elem.classList[0].slice(-1) - 1].classList.toggle('active-count');

    } else {
        row = elem.parentElement.parentElement.querySelector(".type_" + elem.classList[0]);
        column.classList.toggle('active-count');
        row.classList.toggle('active-count');
    }

};

for (const abonement1 of abonement1s) {
    for (let i = 1; i < abonement1.children.length; i++) {
        for (let j = 1; j < abonement1.children[i].children.length; j++) {
            abonement1.children[i].children[j].addEventListener('mouseover', () => columnRowColorTitle(abonement1.children[i].children[j]));
            abonement1.children[i].children[j].addEventListener('mouseout', () => columnRowColorTitle(abonement1.children[i].children[j]));
        };
    };
}
// -----------------------------------Слайдер тренировки----------------------------------------       



let abonement1Sliders = document.querySelectorAll('.abonement_count_lessons_price_container_slider');
for (const abonement1Slider of abonement1Sliders) {

    for (let i = 1; i < abonement1Slider.children.length; i++) {
        for (let j = 1; j < abonement1Slider.children[i].children.length; j++) {
            abonement1Slider.children[i].children[j].addEventListener('mouseover', () => columnRowColorTitle(abonement1Slider.children[i].children[j]));
            abonement1Slider.children[i].children[j].addEventListener('mouseout', () => columnRowColorTitle(abonement1Slider.children[i].children[j]));
        };
    };

};







//Слайдер настройки ---------------------------------------------------------------------------------


let myGallary1 = new Swiper('.strip-of-image', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

    scrollbar: {
        el: '.gallery_contant_slaiders_scroll',
        draggable: true,
    },

    slidesPerView: 1,

    breakpoints: {

        1118: {
            slidesPerView: 3.5,

        },

        850: {
            slidesPerView: 3,

        },
        546: {
            slidesPerView: 2,

        }
    },
    spaceBetween: 15,

});


let myGallary2 = new Swiper('.swiper-gallery', {
    navigation: {
        nextEl: '.next-2',
        prevEl: '.prev-2',
    },

    scrollbar: {
        el: '.gallery_contant_slaiders_scroll-2',
        draggable: true,
    },

    slidesPerView: 1,
    breakpoints: {

        1118: {
            slidesPerView: 3,

        },

        909: {
            slidesPerView: 2.5,

        },
        709: {
            slidesPerView: 2,

        }
    },

    spaceBetween: 15,

});



let lessonsPrice = new Swiper('.abonement_count_lessons_price_slider_container', {
    navigation: {
        nextEl: '.next-3',
        prevEl: '.prev-3',
    },

    scrollbar: {
        el: '.gallery_contant_slaiders_scroll-3',
        draggable: true,
    },

    slidesPerView: 1,

    //spaceBetween: 35,

});



let trenersSlider = new Swiper('.treners_contant_slider_wrapper', {
    navigation: {
        nextEl: '.next-4',
        prevEl: '.prev-4',
    },

    scrollbar: {
        el: '.treners_contant_scrollbar',
        draggable: true,
    },
    breakpoints: {

        1118: {
            slidesPerView: 3.5,

        },

        955: {
            slidesPerView: 3,

        },
        790: {
            slidesPerView: 2.5,

        },
        630: {
            slidesPerView: 2,

        }
    },

    slidesPerView: 1,

    //spaceBetween: 35,

});






























//Переброс элемента по точке останова

//let li = document.createElement('li');

//let headerPhone = document.querySelector('.header_phone');

//window.addEventListener(('resize' || 'onload'), (e) => {
//    if (window.outerWidth <= 520) {
//        let phone = headerPhone;
//        headerPhone.remove();
//        li.appendChild(phone);
//        document.querySelector('.header_menu_contant').appendChild(li);
//        e.preventDefault()
//    }

//})

