function phoneInputValidation(event) {
    if (!("1234567890+\(\)\- ".indexOf(event.key) != -1)) {
        event.preventDefault();
    }
}
window.addEventListener('scroll', function () {
    const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTopPosition > 100) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}
);

let popupClose = document.querySelectorAll('.popup__close');
let thxClose = document.querySelector('.overlay-thx__btn');
let popup = document.querySelector('.overlay-call');
let popupThx = document.querySelector('.overlay-thx');
let popupOpen = document.querySelectorAll('.modal');
popupClose.forEach((el) => {
    el.addEventListener('click', function () {
        el.closest(".overlay").classList.remove('overlay-active');
    });
});
popupOpen.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('overlay-active');
    });
});
if (document.querySelector('.overlay-call')) {
    document.querySelector('.overlay-call').onclick = function (e) {
        if (!e.target.closest('.popup')) {
            popup.classList.remove('overlay-active');
        };
    };
}
if (document.querySelector('.overlay-thx')) {
    document.querySelector('.overlay-thx').onclick = function (e) {
        if (!e.target.closest('.popup')) {
            popupThx.classList.remove('overlay-active');
        };
    };
}
thxClose.addEventListener("click", (e) => {
    e.preventDefault();
    popupThx.classList.remove('overlay-active');
});