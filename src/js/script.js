//Анимация кнопки 

let button_figure = document.querySelector('.header_button_figure-2');

button_figure.addEventListener('mouseover', () => {
    document.querySelector('.get_consult').classList.toggle('active_a');
});
button_figure.addEventListener('mouseout', () => {
    document.querySelector('.get_consult').classList.toggle('active_a');
})

//Переброс элемента по точке останова

let li = document.createElement('li');

let headerPhone = document.querySelector('.header_phone');

window.addEventListener(('resize' || 'load'), (e) => {
    if (window.outerWidth <= 520) {
        let phone = headerPhone;
        headerPhone.remove();
        li.appendChild(phone);
        document.querySelector('.header_menu_contant').appendChild(li);
        e.preventDefault()
    }

})
