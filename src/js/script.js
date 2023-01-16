//Анимация кнопки 

let button_figure = document.querySelector('.header_button_figure-2');

button_figure.addEventListener('mouseover', () => {
    document.querySelector('.get_consult').classList.toggle('active_a');
});
button_figure.addEventListener('mouseout', () => {
    document.querySelector('.get_consult').classList.toggle('active_a');
})

//Активация бургера

let burgerHeader = document.querySelector('.burger_header');

burgerHeader.addEventListener('click', () => {
    burgerHeader.classList.toggle('active-b');
    document.querySelector('.header_menu').classList.toggle('header_menu_show');
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

